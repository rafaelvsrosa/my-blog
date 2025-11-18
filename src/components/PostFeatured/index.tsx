import { PosterCoverImage } from "../PostCoverImage";
import { PostHeading } from "../PostHeading";

export function PostFeatured() {
  const slug = 'a'
  const postLink = `/posts/${slug}`;

  return (
    <section className="grid grid-cols-1 gap-8 mb-16 sm:grid-cols-2 group">
      <PosterCoverImage
        linkProps={{
          href: postLink,
        }}
        imageProps={{
          width: 1200,
          height: 1200,
          src: "/images/konshu.png",
          alt: "Alt da imagem",
          priority: true,
        }}
      />
      <div className="flex flex-col gap-4 sm:justify-center">
        <time
          className="text-slate-600 block text-sm/tight"
          dateTime="2025-11-12"
        >
          12/11/2015 15:00
        </time>

        <PostHeading as="h1" url={postLink}>
          Lorem ipsum dolor sit amet consectetur adipisicing.
        </PostHeading>

        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis
          quae nihil explicabo harum recusandae consequuntur ipsam delectus
          veniam laborum itaque, officia obcaecati vitae soluta totam mollitia
          doloribus minima aliquam porro!
        </p>
      </div>
    </section>
  );
}
