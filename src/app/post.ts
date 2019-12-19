export class Post {
    public id: number = 0;
    public parent_id: number;
    public user_id: number;
    public title: string = '';
    public content: string = '';
    public link: string = '';
    public pic: string = '';
    public votes: number = 0;
    public created_at: number;
}
