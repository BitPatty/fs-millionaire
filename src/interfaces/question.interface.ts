interface Question {
  identifier: string;
  text: string;
  answers: [
    {
      identifier: string;
      text: string;
      hidden: boolean;
    },
    {
      identifier: string;
      text: string;
      hidden: boolean;
    },
    {
      identifier: string;
      text: string;
      hidden: boolean;
    },
    {
      identifier: string;
      text: string;
      hidden: boolean;
    },
  ];
}

export default Question;
