export class Post {
  text: string;
  createdDate: Date;

  constructor(option?: { _text: string; _createdDate?: Date }) {
    this.text = option && option._text ? option._text : undefined;
    this.createdDate =
      option && option._createdDate ? option._createdDate : new Date();
  }

  newPost(postText: string) {
    const options = { _text: postText };
    return new Post(options);
  }
}
