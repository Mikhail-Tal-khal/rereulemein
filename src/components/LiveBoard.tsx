"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { Pause, Play, Rewind, StepBack, StepForward } from "@/components/Icons";
import {
  FILES,
  GLYPH,
  IMMORTAL,
  indexToSquare,
  knightMoves,
  pieceLabel,
  positionAt,
  squareName,
  toIndex,
  toPairs,
  type Square,
} from "@/lib/chess";

const TICK_MS = 1500;
const KNIGHT_START: Square = { col: 6, row: 7 }; // g1

type Mode = "game" | "knight";

function Frame({ children }: { children: React.ReactNode }) {
  return (
    <div className="board-shell relative w-full rounded-md border border-bronze/25 bg-gradient-to-br from-bronze/15 via-board-edge to-signal/10 p-[2.5%] shadow-[0_24px_60px_-24px_rgba(0,0,0,0.9)]">
      <div className="relative aspect-square w-full overflow-hidden rounded-sm ring-1 ring-black/40">
        {children}
      </div>
    </div>
  );
}

/** The 64 background squares, with lichess-style edge coordinates. */
function Squares({
  highlight = [],
  onSquare,
  isTarget,
}: {
  highlight?: (number | null)[];
  onSquare?: (square: Square, index: number) => void;
  isTarget?: (square: Square) => boolean;
}) {
  return (
    <div className="grid h-full w-full grid-cols-8 grid-rows-8">
      {Array.from({ length: 64 }, (_, index) => {
        const square = indexToSquare(index);
        const light = (square.col + square.row) % 2 === 0;
        const lit = highlight.includes(index);
        const target = isTarget?.(square) ?? false;
        const name = squareName(square);
        const interactive = Boolean(onSquare) && target;

        const content = (
          <>
            {lit ? (
              <span
                aria-hidden="true"
                className="absolute inset-0 bg-amber/45 mix-blend-hard-light"
              />
            ) : null}
            {target ? (
              <span
                aria-hidden="true"
                className="absolute left-1/2 top-1/2 h-[26%] w-[26%] -translate-x-1/2 -translate-y-1/2 rounded-full bg-ink/35"
              />
            ) : null}
            {square.row === 7 ? (
              <span
                aria-hidden="true"
                className={`absolute bottom-[3%] right-[6%] font-mono text-[1.7cqw] leading-none ${
                  light ? "text-board-dark/80" : "text-board-light/80"
                }`}
              >
                {FILES[square.col]}
              </span>
            ) : null}
            {square.col === 0 ? (
              <span
                aria-hidden="true"
                className={`absolute left-[6%] top-[4%] font-mono text-[1.7cqw] leading-none ${
                  light ? "text-board-dark/80" : "text-board-light/80"
                }`}
              >
                {8 - square.row}
              </span>
            ) : null}
          </>
        );

        const tone = light ? "bg-board-light" : "bg-board-dark";

        return interactive ? (
          <button
            key={name}
            type="button"
            onClick={() => onSquare?.(square, index)}
            aria-label={`Move knight to ${name}`}
            className={`relative cursor-pointer transition-colors duration-200 hover:brightness-110 ${tone}`}
          >
            {content}
          </button>
        ) : (
          <div key={name} className={`relative ${tone}`}>
            {content}
          </div>
        );
      })}
    </div>
  );
}

function GameBoard() {
  const [ply, setPly] = useState(0);
  const [playing, setPlaying] = useState(false);
  const listRef = useRef<HTMLDivElement>(null);
  const activeRef = useRef<HTMLButtonElement>(null);

  const finished = ply >= IMMORTAL.length;
  /** Reaching the last move stops the clock on its own — no setState needed. */
  const running = playing && !finished;
  const position = useMemo(() => positionAt(IMMORTAL, ply), [ply]);
  const pairs = useMemo(() => toPairs(IMMORTAL), []);

  useEffect(() => {
    if (!running) return;
    const timer = window.setTimeout(() => setPly((value) => value + 1), TICK_MS);
    return () => window.clearTimeout(timer);
  }, [running, ply]);

  // Keep the running move visible without dragging the page along with it.
  useEffect(() => {
    const active = activeRef.current;
    const list = listRef.current;
    if (!active || !list) return;
    const top = active.offsetTop - list.clientHeight / 2 + active.clientHeight / 2;
    list.scrollTo({ top, behavior: "smooth" });
  }, [ply]);

  /** Stable order so React keeps each piece's node and CSS slides it. */
  const pieces = useMemo(() => {
    const list: { id: string; glyph: string; label: string; col: number; row: number; white: boolean }[] = [];
    position.board.forEach((cell, index) => {
      if (!cell) return;
      const { col, row } = indexToSquare(index);
      list.push({
        id: cell.id,
        glyph: GLYPH[cell.piece],
        label: pieceLabel(cell.piece),
        col,
        row,
        white: cell.piece[0] === "w",
      });
    });
    return list.sort((a, b) => a.id.localeCompare(b.id));
  }, [position]);

  const current = ply > 0 ? IMMORTAL[ply - 1] : null;
  const note = current?.note;

  return (
    <div>
      <Frame>
        <Squares highlight={[position.from, position.to]} />

        <div className="pointer-events-none absolute inset-0">
          {pieces.map((piece) => (
            <span
              key={piece.id}
              role="img"
              aria-label={`${piece.label} on ${squareName({ col: piece.col, row: piece.row })}`}
              className={`piece-glyph absolute left-0 top-0 flex h-[12.5%] w-[12.5%] items-center justify-center transition-transform duration-300 ease-out ${
                piece.white ? "piece-w" : "piece-b"
              }`}
              style={{
                transform: `translate(${piece.col * 100}%, ${piece.row * 100}%)`,
              }}
            >
              {piece.glyph}
            </span>
          ))}
        </div>
      </Frame>

      <div className="mt-5 flex flex-wrap items-center justify-between gap-3">
        <div className="flex items-center gap-1.5">
          <button
            type="button"
            onClick={() => {
              setPly(0);
              setPlaying(false);
            }}
            aria-label="Back to the start"
            className="flex h-9 w-9 items-center justify-center rounded-sm border border-line text-muted transition-colors hover:border-bronze/50 hover:text-bronze"
          >
            <Rewind className="h-4 w-4" />
          </button>
          <button
            type="button"
            onClick={() => setPly((value) => Math.max(0, value - 1))}
            disabled={ply === 0}
            aria-label="Previous move"
            className="flex h-9 w-9 items-center justify-center rounded-sm border border-line text-muted transition-colors hover:border-bronze/50 hover:text-bronze disabled:opacity-30"
          >
            <StepBack className="h-4 w-4" />
          </button>
          <button
            type="button"
            onClick={() => {
              if (finished) {
                setPly(0);
                setPlaying(true);
                return;
              }
              setPlaying((value) => !value);
            }}
            aria-label={running ? "Pause" : "Play the game"}
            className="flex h-9 items-center gap-2 rounded-sm border border-bronze/50 bg-bronze/10 px-3.5 text-bronze transition-colors hover:bg-bronze/20"
          >
            {running ? <Pause className="h-4 w-4" /> : <Play className="h-4 w-4" />}
            <span className="font-mono text-[10px] uppercase tracking-[0.18em]">
              {running ? "Pause" : finished ? "Replay" : "Play"}
            </span>
          </button>
          <button
            type="button"
            onClick={() => setPly((value) => Math.min(IMMORTAL.length, value + 1))}
            disabled={finished}
            aria-label="Next move"
            className="flex h-9 w-9 items-center justify-center rounded-sm border border-line text-muted transition-colors hover:border-bronze/50 hover:text-bronze disabled:opacity-30"
          >
            <StepForward className="h-4 w-4" />
          </button>
        </div>

        <p className="flex items-center gap-2 font-mono text-[11px] tracking-wide text-muted">
          {running ? (
            <span className="relative flex h-1.5 w-1.5">
              <span className="absolute inline-flex h-full w-full rounded-full bg-jade animate-ping-soft" />
              <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-jade" />
            </span>
          ) : null}
          <span className="text-bronze">{current ? current.san : "start"}</span>
          <span className="text-muted/40">·</span>
          {ply}/{IMMORTAL.length}
        </p>
      </div>

      <div
        ref={listRef}
        className="mt-4 max-h-40 overflow-y-auto rounded-sm border border-line/70 bg-ink/50 p-3"
      >
        <ol className="space-y-0.5">
          {pairs.map((pair) => {
            const whitePly = (pair.number - 1) * 2 + 1;
            const blackPly = whitePly + 1;

            return (
              <li
                key={pair.number}
                className="grid grid-cols-[2.2rem_1fr_1fr] items-center gap-1 font-mono text-[11px]"
              >
                <span className="text-muted/40">{pair.number}.</span>
                {[
                  { move: pair.white, target: whitePly },
                  ...(pair.black ? [{ move: pair.black, target: blackPly }] : []),
                ].map(({ move, target }) => (
                  <button
                    key={target}
                    ref={target === ply ? activeRef : undefined}
                    type="button"
                    onClick={() => {
                      setPly(target);
                      setPlaying(false);
                    }}
                    className={`rounded-[2px] px-1.5 py-0.5 text-left transition-colors ${
                      target === ply
                        ? "bg-bronze/20 text-bronze"
                        : "text-muted hover:bg-line/60 hover:text-bone"
                    }`}
                  >
                    {move.san}
                  </button>
                ))}
              </li>
            );
          })}
        </ol>
      </div>

      <p
        aria-live="polite"
        className="mt-4 min-h-[3.25rem] text-sm leading-relaxed text-muted"
      >
        {note ? (
          <span className="animate-fade-in">
            <span className="font-mono text-xs text-bronze">{current?.san}</span>{" "}
            — {note}
          </span>
        ) : (
          <span className="text-muted/70">
            Anderssen&ndash;Kieseritzky, London 1851. White finishes a queen, both
            rooks and a bishop down. Step through it, or press play.
          </span>
        )}
      </p>
    </div>
  );
}

function KnightBoard() {
  const [knight, setKnight] = useState<Square>(KNIGHT_START);
  const [visited, setVisited] = useState<string[]>([squareName(KNIGHT_START)]);

  const moves = useMemo(() => knightMoves(knight), [knight]);
  const moveNames = useMemo(() => new Set(moves.map(squareName)), [moves]);

  const move = (square: Square) => {
    setKnight(square);
    setVisited((history) => {
      const name = squareName(square);
      return history.includes(name) ? history : [...history, name];
    });
  };

  return (
    <div>
      <Frame>
        <Squares
          highlight={[toIndex(squareName(knight))]}
          isTarget={(square) => moveNames.has(squareName(square))}
          onSquare={move}
        />

        <div className="pointer-events-none absolute inset-0">
          <span
            role="img"
            aria-label={`Knight on ${squareName(knight)}`}
            className="piece-glyph piece-w absolute left-0 top-0 flex h-[12.5%] w-[12.5%] items-center justify-center transition-transform duration-300 ease-out"
            style={{
              transform: `translate(${knight.col * 100}%, ${knight.row * 100}%)`,
            }}
          >
            {GLYPH.wN}
          </span>

          {visited
            .filter((name) => name !== squareName(knight))
            .map((name) => {
              const square = indexToSquare(toIndex(name));
              return (
                <span
                  key={name}
                  aria-hidden="true"
                  className="absolute left-0 top-0 flex h-[12.5%] w-[12.5%] items-center justify-center"
                  style={{
                    transform: `translate(${square.col * 100}%, ${square.row * 100}%)`,
                  }}
                >
                  <span className="h-[14%] w-[14%] rounded-full bg-signal/70 ring-1 ring-ink/30" />
                </span>
              );
            })}
        </div>
      </Frame>

      <div className="mt-5 flex flex-wrap items-center justify-between gap-3 border-t border-line/70 pt-4">
        <p className="font-mono text-[11px] tracking-wide text-muted">
          <span className="text-bronze">{squareName(knight)}</span>
          <span className="text-muted/40"> · </span>
          <span className={moves.length >= 8 ? "text-jade" : "text-muted"}>
            {moves.length} reachable
          </span>
          <span className="text-muted/40"> · </span>
          {visited.length} touched
        </p>
        <button
          type="button"
          onClick={() => {
            setKnight(KNIGHT_START);
            setVisited([squareName(KNIGHT_START)]);
          }}
          className="flex h-9 items-center gap-2 rounded-sm border border-line px-3 font-mono text-[10px] uppercase tracking-[0.16em] text-muted transition-colors hover:border-bone/40 hover:text-bone"
        >
          <Rewind className="h-3.5 w-3.5" />
          Reset
        </button>
      </div>

      <p className="mt-4 min-h-[3.25rem] text-sm leading-relaxed text-muted">
        A knight on the rim reaches four squares. In the centre it reaches eight.
        Position decides reach — for pieces, and for every account, service and
        host on a network.
      </p>
    </div>
  );
}

export default function LiveBoard() {
  const [mode, setMode] = useState<Mode>("game");

  const tabs: { key: Mode; label: string }[] = [
    { key: "game", label: "The Immortal Game" },
    { key: "knight", label: "Knight's reach" },
  ];

  return (
    <div className="rounded-sm border border-line/80 bg-surface/40 p-5 sm:p-7">
      <div
        role="tablist"
        aria-label="Board mode"
        className="mb-5 flex gap-1 rounded-sm border border-line/70 bg-ink/60 p-1"
      >
        {tabs.map((tab) => (
          <button
            key={tab.key}
            role="tab"
            type="button"
            aria-selected={mode === tab.key}
            onClick={() => setMode(tab.key)}
            className={`flex-1 rounded-[2px] px-3 py-2 font-mono text-[10px] uppercase tracking-[0.16em] transition-colors ${
              mode === tab.key
                ? "bg-bronze/15 text-bronze"
                : "text-muted hover:text-bone"
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {mode === "game" ? <GameBoard /> : <KnightBoard />}
    </div>
  );
}
