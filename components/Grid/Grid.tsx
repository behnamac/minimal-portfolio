import { BentoGrid, BentoGridItem } from "../ui/BentoGrid";
import { gridItems } from "@/app/Data/data";

const Grid = () => {
  const items = gridItems.map(
    ({
      id,
      title,
      description,
      className,
      img,
      imgClassName,
      titleClassName,
      spareImg,
    }) => (
      <BentoGridItem
        id={id}
        key={id}
        title={title}
        description={description}
        className={className}
        img={img}
        imgClassName={imgClassName}
        titleClassName={titleClassName}
        spareImg={spareImg}
      />
    )
  );

  return (
    <section id="about">
      <BentoGrid className="w-full py-20">{items}</BentoGrid>
    </section>
  );
};

export default Grid;
