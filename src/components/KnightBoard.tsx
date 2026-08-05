"use client";

import { useMemo, useState } from "react";

const FILES = ["a", "b", "c", "d", "e", "f", "g", "h"] as const;
const START = { col: 6, row: 7 }; // g1

type Square = { col: number; row: number };

const squareName = ({ col, row }: Square) => `${FILES[col]}${8 - row}`;
const sameSquare = (a: Square, b: Square) => a.col === b.col && a.row === b.row;

const KNIGHT_OFFSETS: readonly [number, number][] = [
  [1, 2],
  [2, 1],
  [2, -1],
  [1, -2],
  [-1, -2],
  [-2, -1],
  [-2, 1],
  [-1, 2],
];

function legalMoves({ col, row }: Square): Square[] {
  return KNIGHT_OFFSETS.map(([dc, dr]) => ({ col: col + dc, row: row + dr })).filter(
    (square) =>
      square.col >= 0 && square.col < 8 && square.row >= 0 && square.row < 8,
  );
}

export default function KnightBoard() {
  const [knight, setKnight] = useState<Square>(START);
  const [visited, setVisited] = useState<string[]>([squareName(START)]);

  const moves = useMemo(() => legalMoves(knight), [knight]);
  const moveNames = useMemo(() => new Set(moves.map(squareName)), [moves]);

  const move = (square: Square) => {
    setKnight(square);
    setVisited((history) => {
      const name = squareName(square);
      return history.includes(name) ? history : [...history, name];
    });
  };

  const reset = () => {
    setKnight(START);
    setVisited([squareName(START)]);
  };

  return (
    <div className="rounded-sm border border-line/80 bg-surface/40 p-6 sm:p-8">
      <div
        role="grid"
        aria-label="Interactive chessboard showing knight moves"
        className="mx-auto grid aspect-square w-full max-w-sm grid-cols-8 overflow-hidden rounded-sm border border-line"
      >
        {Array.from({ length: 64 }, (_, i) => {
          const square: Square = { col: i % 8, row: Math.floor(i / 8) };
          const name = squareName(square);
          const light = (square.col + square.row) % 2 === 0;
          const isKnight = sameSquare(square, knight);
          const isMove = moveNames.has(name);
          const wasVisited = visited.includes(name);

          return (
            <button
              key={name}
              type="button"
              role="gridcell"
              disabled={!isMove}
              onClick={() => move(square)}
              aria-label={
                isKnight
                  ? `Knight on ${name}`
                  : isMove
                    ? `Move knight to ${name}`
                    : name
              }
              className={`relative flex items-center justify-center transition-colors duration-200 ${
                light ? "bg-bone/[0.07]" : "bg-bone/[0.02]"
              } ${isMove ? "cursor-pointer hover:bg-bronze/25" : "cursor-default"}`}
            >
              {isKnight ? (
                <span
                  aria-hidden="true"
                  className="text-[clamp(1.1rem,4.5vw,1.75rem)] leading-none text-bronze drop-shadow-[0_0_10px_rgba(200,164,92,0.45)]"
                >
                  &#9822;
                </span>
              ) : isMove ? (
                <span
                  aria-hidden="true"
                  className="h-1.5 w-1.5 rounded-full bg-bronze/70"
                />
              ) : wasVisited ? (
                <span
                  aria-hidden="true"
                  className="h-1 w-1 rounded-full bg-signal/40"
                />
              ) : null}
            </button>
          );
        })}
      </div>

      <div className="mt-6 flex flex-wrap items-center justify-between gap-4 border-t border-line/70 pt-5">
        <p className="font-mono text-[11px] tracking-wide text-muted">
          <span className="text-bronze">{squareName(knight)}</span>
          <span className="text-muted/50"> · </span>
          {moves.length} squares reachable
          <span className="text-muted/50"> · </span>
          {visited.length} touched
        </p>
        <button
          type="button"
          onClick={reset}
          className="rounded-sm border border-line px-3 py-1.5 font-mono text-[10px] uppercase tracking-[0.16em] text-muted transition-colors hover:border-bone/40 hover:text-bone"
        >
          Reset
        </button>
      </div>

      <p className="mt-4 text-sm leading-relaxed text-muted">
        A knight on the rim reaches four squares. In the centre it reaches eight.
        Position decides reach — for pieces, and for every account, service and
        host on a network.
      </p>
    </div>
  );
}
