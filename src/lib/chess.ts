/**
 * Just enough chess to replay one fixed, well-known game.
 *
 * Not an engine — no legality checking, no castling, no en passant, no
 * promotion. The game below contains none of those, so moves are applied as
 * plain from → to relocations and every position is derived by replaying from
 * the start. 45 plies is nothing to recompute.
 */

export const FILES = ["a", "b", "c", "d", "e", "f", "g", "h"] as const;

export type Square = { col: number; row: number };

/** Colour + piece, e.g. "wN" is a white knight. Row 0 is rank 8. */
export type Piece =
  | "wK" | "wQ" | "wR" | "wB" | "wN" | "wP"
  | "bK" | "bQ" | "bR" | "bB" | "bN" | "bP";

/**
 * A piece keeps its `id` for the whole game so the view can keep the same DOM
 * node for it and let CSS slide it between squares.
 */
export type Placed = { id: string; piece: Piece };

export type Board = readonly (Placed | null)[];

export const squareName = ({ col, row }: Square) => `${FILES[col]}${8 - row}`;

export const toIndex = (name: string): number => {
  const col = FILES.indexOf(name[0] as (typeof FILES)[number]);
  const row = 8 - Number(name[1]);
  return row * 8 + col;
};

export const indexToSquare = (index: number): Square => ({
  col: index % 8,
  row: Math.floor(index / 8),
});

export const sameSquare = (a: Square, b: Square) =>
  a.col === b.col && a.row === b.row;

const BACK_RANK = ["R", "N", "B", "Q", "K", "B", "N", "R"] as const;

/** Ids are the starting square, which is unique and stable. */
const rank = (colour: "w" | "b", row: number, kinds: readonly string[]): Board =>
  kinds.map((kind, col) => ({
    id: `${colour}${kind}-${FILES[col]}${8 - row}`,
    piece: `${colour}${kind}` as Piece,
  }));

export const START_BOARD: Board = [
  ...rank("b", 0, BACK_RANK),
  ...rank("b", 1, Array.from({ length: 8 }, () => "P")),
  ...Array.from({ length: 32 }, () => null),
  ...rank("w", 6, Array.from({ length: 8 }, () => "P")),
  ...rank("w", 7, BACK_RANK),
];

export type Move = {
  /** Standard algebraic notation, for the move list. */
  san: string;
  from: string;
  to: string;
  /** Shown under the board when this move is on screen. */
  note?: string;
};

/**
 * Anderssen–Kieseritzky, London 1851 — "the Immortal Game". White gives up a
 * bishop, both rooks and the queen, and mates with what is left.
 */
export const IMMORTAL: readonly Move[] = [
  { san: "e4", from: "e2", to: "e4" },
  { san: "e5", from: "e7", to: "e5" },
  { san: "f4", from: "f2", to: "f4", note: "The King's Gambit. A pawn offered on move two." },
  { san: "exf4", from: "e5", to: "f4" },
  { san: "Bc4", from: "f1", to: "c4" },
  { san: "Qh4+", from: "d8", to: "h4", note: "Black's queen comes out early — and never really goes home." },
  { san: "Kf1", from: "e1", to: "f1" },
  { san: "b5", from: "b7", to: "b5" },
  { san: "Bxb5", from: "c4", to: "b5" },
  { san: "Nf6", from: "g8", to: "f6" },
  { san: "Nf3", from: "g1", to: "f3" },
  { san: "Qh6", from: "h4", to: "h6" },
  { san: "d3", from: "d2", to: "d3" },
  { san: "Nh5", from: "f6", to: "h5" },
  { san: "Nh4", from: "f3", to: "h4" },
  { san: "Qg5", from: "h6", to: "g5" },
  { san: "Nf5", from: "h4", to: "f5" },
  { san: "c6", from: "c7", to: "c6" },
  { san: "g4", from: "g2", to: "g4" },
  { san: "Nf6", from: "h5", to: "f6" },
  { san: "Rg1", from: "h1", to: "g1", note: "The bishop is left to be taken. Anderssen wants the g-file instead." },
  { san: "cxb5", from: "c6", to: "b5" },
  { san: "h4", from: "h2", to: "h4" },
  { san: "Qg6", from: "g5", to: "g6" },
  { san: "h5", from: "h4", to: "h5" },
  { san: "Qg5", from: "g6", to: "g5" },
  { san: "Qf3", from: "d1", to: "f3" },
  { san: "Ng8", from: "f6", to: "g8", note: "Black is a piece up and has been driven back to the first two ranks." },
  { san: "Bxf4", from: "c1", to: "f4" },
  { san: "Qf6", from: "g5", to: "f6" },
  { san: "Nc3", from: "b1", to: "c3" },
  { san: "Bc5", from: "f8", to: "c5" },
  { san: "Nd5", from: "c3", to: "d5" },
  { san: "Qxb2", from: "f6", to: "b2" },
  { san: "Bd6", from: "f4", to: "d6", note: "Both rooks hanging — and he plays somewhere else entirely." },
  { san: "Bxg1", from: "c5", to: "g1" },
  { san: "e5", from: "e4", to: "e5" },
  { san: "Qxa1+", from: "b2", to: "a1" },
  { san: "Ke2", from: "f1", to: "e2" },
  { san: "Na6", from: "b8", to: "a6" },
  { san: "Nxg7+", from: "f5", to: "g7" },
  { san: "Kd8", from: "e8", to: "d8" },
  { san: "Qf6+", from: "f3", to: "f6", note: "The queen offered on the one square that finishes it." },
  { san: "Nxf6", from: "g8", to: "f6" },
  { san: "Be7#", from: "d6", to: "e7", note: "Mate — down a queen, both rooks and a bishop. Two knights and a bishop do the work." },
];

export type Position = {
  board: Board;
  /** Squares of the move just played, for the highlight. */
  from: number | null;
  to: number | null;
  /** Pieces taken so far, in capture order. */
  captured: readonly Placed[];
};

/** Replays the opening `ply` moves and returns the resulting position. */
export function positionAt(moves: readonly Move[], ply: number): Position {
  const board = [...START_BOARD];
  const captured: Placed[] = [];
  let from: number | null = null;
  let to: number | null = null;

  for (let i = 0; i < ply && i < moves.length; i += 1) {
    const move = moves[i];
    from = toIndex(move.from);
    to = toIndex(move.to);
    const taken = board[to];
    if (taken) captured.push(taken);
    board[to] = board[from];
    board[from] = null;
  }

  return { board, from, to, captured };
}

const KNIGHT_OFFSETS: readonly [number, number][] = [
  [1, 2], [2, 1], [2, -1], [1, -2],
  [-1, -2], [-2, -1], [-2, 1], [-1, 2],
];

export function knightMoves({ col, row }: Square): Square[] {
  return KNIGHT_OFFSETS.map(([dc, dr]) => ({
    col: col + dc,
    row: row + dr,
  })).filter(
    (square) =>
      square.col >= 0 && square.col < 8 && square.row >= 0 && square.row < 8,
  );
}

/** Filled glyphs for both colours — outline glyphs read as washed out. */
export const GLYPH: Record<Piece, string> = {
  wK: "♚", wQ: "♛", wR: "♜",
  wB: "♝", wN: "♞", wP: "♟",
  bK: "♚", bQ: "♛", bR: "♜",
  bB: "♝", bN: "♞", bP: "♟",
};

const NAMES: Record<string, string> = {
  K: "king", Q: "queen", R: "rook", B: "bishop", N: "knight", P: "pawn",
};

export const pieceLabel = (piece: Piece) =>
  `${piece[0] === "w" ? "White" : "Black"} ${NAMES[piece[1]]}`;

/** "1. e4 e5" pairs for the move list. */
export function toPairs(moves: readonly Move[]) {
  const pairs: { number: number; white: Move; black?: Move }[] = [];
  for (let i = 0; i < moves.length; i += 2) {
    pairs.push({
      number: i / 2 + 1,
      white: moves[i],
      black: moves[i + 1],
    });
  }
  return pairs;
}
