interface IContent {
    id: number;
    context: string;
    content: string;
    timeCourse: number;
    linkCourse: string;
    linkImage: string;
}

export const content1:IContent =  {
    id: 1,
    context: "Programação",
    content: "Javascript",
    timeCourse: 10,
    linkCourse: "https://www.youtube.com/watch?v=0mYq5LrQN1s",
    linkImage: "https://miro.medium.com/max/1200/1*mk1-6aYaf_Bes1E3Imhc0A.jpeg",
}

export const content2:IContent =  {
    id: 2,
    context: "Programação",
    content: "Typescript",
    timeCourse: 10,
    linkCourse: "https://www.youtube.com/watch?v=0mYq5LrQN1s",
    linkImage: "https://miro.medium.com/max/1200/1*mk1-6aYaf_Bes1E3Imhc0A.jpeg",
}

export const content3:IContent =  {
    id: 3,
    context: "Vestibular",
    content: "Matemática",
    timeCourse: 10,
    linkCourse: "https://www.youtube.com/watch?v=0mYq5LrQN1s",
    linkImage: "https://miro.medium.com/max/1200/1*mk1-6aYaf_Bes1E3Imhc0A.jpeg",
}

export const mockContent: IContent[] = [ content1, content2, content3 ];

