import Image from "@/common/components/elements/Image";
import { ABOUT } from "@/common/constant/about";

const Story = () => {
  const ABOUT = `
<p>
    Hello! Thanks for stopping by my personal website.
</p>
<p>
    I'm Ryan. I've been working in web development for over 10 years, doing both the coding you see on the screen (frontend) and the stuff that happens behind the scenes (backend). I know how to manage projects using methods like Waterfall and Agile. But what really gets me excited is making websites and apps that are easy for everyone to use and look good too!
</p>
<p>
    I'm really into JavaScript and PHP, which are languages used to build websites. I also know a bunch of frameworks that make building websites even easier, like React, Vue, Angular, Node.js, and PHP frameworks like Codeigniter and Laravel. I love learning about new web tools and features.
</p>
<p>
    In my career, I've led teams to build software for a wide range of companies, from large corporations to innovative startups.
</p>
<p>
    I believe that good communication is super important in any job.
</p>
<p>
    I'm good at adapting to different situations, working efficiently, and always trying to do my best. My experience has taught me how to solve problems and lead teams, but I'm also happy to work with others to get things done. I'm excited about the chance to work together and make cool stuff!
</p>
<p>
    I'm looking forward to the possibility of working with you!
</p>
`;

  return (
    <div className="space-y-8">
      <section
        className="space-y-4 leading-[1.8] dark:text-neutral-300 text-neutral-800 md:leading-loose"
        dangerouslySetInnerHTML={{ __html: ABOUT }}
      />

      <div className="space-y-4">
        <span>Best Regards,</span>
        <Image
          src="/images/signature.png"
          width={150}
          height={150}
          alt="Aulianza"
        />
      </div>
    </div>
  );
};

export default Story;
