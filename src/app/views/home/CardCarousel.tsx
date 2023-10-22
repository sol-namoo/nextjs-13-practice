"use client";

import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

import PostCard from "../post/PostCard";
import { Post } from "@/app/service/posts";

const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 8,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 4,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};

const CardCarousel = ({ posts }: { posts: Post[] }) => {
  return (
    <Carousel
      showDots
      infinite
      // slidesToSlide={4}
      keyBoardControl
      responsive={responsive}
      customTransition="all .5"
      transitionDuration={500}
      containerClass="container-with-dots"
      removeArrowOnDeviceType={["tablet", "mobile"]}
      dotListClass="custom-dot-list-style"
      itemClass="carousel-item-padding-40-px"
    >
      {posts?.map((post, index) => (
        <PostCard post={post} key={index} />
      ))}
    </Carousel>
  );
};

export default CardCarousel;
