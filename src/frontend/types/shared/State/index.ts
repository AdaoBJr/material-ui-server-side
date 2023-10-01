//---------- DOC ----------//
export type DocKeyState = string | null;

export interface DocInfoData {
  docId: string | null;
}

export interface DocInfoState extends DocInfoData {
  setDocInfoInState: (docInfo: DocInfoData | null) => void;
}

export type AppState = DocInfoState;
