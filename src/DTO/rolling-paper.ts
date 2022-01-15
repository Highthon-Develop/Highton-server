export interface WriteRollingPaperDTO {
  content: string;
  userIdx: number;
}

export interface WriteRollingPaperResponseDTO {
  success: boolean;
  idx: number;
}
