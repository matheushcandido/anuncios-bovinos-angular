export interface Report {
    id: string;
    idAnnouncement: string;
    sold: boolean;
    wrongAddress: boolean;
    wrongPrice: boolean;
    joke: boolean;
    wrongCategory: boolean;
    duplicated: boolean;
    illegal: boolean;
    fraud: boolean;
    note: string;
    status: string;
}