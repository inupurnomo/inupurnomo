export const ABOUT = `
<p>
  Hi there! Thanks for visiting my personal website.
</p>
<p>
  I'm Ilham, Born in Kebumen - Central Java, February 16th, 1998.</p>
<p>
  A passionate and fast learner person to learn new things. I am Software Developer with rich experience in website building and customization, also great communication skills. I have honed my skills in both frontend and backend development. In addition to my hands-on experience in web development, my education has also played a critical role in providing a strong foundation for my career.
</p>
`;

interface profileProps {
  name: string;
  birthdate: string;
  username: string;
  avatar: string;
  pronounce: string;
  about: string;
  base: string;
  description: string;
  skills: string[];
  resume: string;
}

export const PROFILE: profileProps = {
  name: "Ilham Ibnu Purnomo",
  birthdate: "1998-02-16",
  username: "inupurnomo",
  avatar: "/images/me.webp",
  pronounce: "he/him",
  about: `
    <p>
      Hi there! Thanks for visiting my personal website.
    </p>
    <p>
      I'm Ilham, Born in Kebumen - Central Java, February 16th, 1998.</p>
    <p>
      A passionate and fast learner person to learn new things. I am Software Developer with rich experience in website building and customization, also great communication skills. I have honed my skills in both frontend and backend development. In addition to my hands-on experience in web development, my education has also played a critical role in providing a strong foundation for my career.
    </p>
  `,
  base: "Jakarta, Indonesia",
  description: `Seasoned software engineer especially in frontend side, with a
            passion for creating pixel-perfect web experiences.`,
  skills: [
    "Full-stack Developer",
    "Web Developer",
    "Software Developer",
  ],
  resume: "https://bit.ly/cv-inupurnomo"
};
