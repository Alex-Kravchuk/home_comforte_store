import React from "react";

import {
  ReviewBodyWrapper,
  ReviewDate,
  ReviewImages,
  ReviewImg,
  ReviewReadMoreButton,
  ReviewText,
  ReviewTextParagraph,
} from "./Review.styled";

const ReviewBody = ({ date, showMore, showMoreHandler, body, body_img }) => {
  const bodyParagraphs = body.split("\n");
  //   it's a short version of all review text. Only a two first paragraphs
  const shortPreview = bodyParagraphs.slice(0, 2);

  const tooLongReview = bodyParagraphs.length > 2;
  const lastParagraphIndex = bodyParagraphs.length - 1;
  return (
    <ReviewBodyWrapper>
      <ReviewDate>{date}</ReviewDate>
      <ReviewText>
        {!showMore
          ? shortPreview.map((item, index) => {
              if (index === 1 && tooLongReview) {
                return (
                  <ReviewTextParagraph key={index}>
                    {item}
                    <ReviewReadMoreButton onClick={showMoreHandler}>
                      Read more
                    </ReviewReadMoreButton>
                  </ReviewTextParagraph>
                );
              }

              return (
                <ReviewTextParagraph key={index}>{item}</ReviewTextParagraph>
              );
            })
          : bodyParagraphs.map((item, index) => {
              if (index === lastParagraphIndex) {
                return (
                  <ReviewTextParagraph key={index}>
                    {item}
                    <ReviewReadMoreButton onClick={showMoreHandler}>
                      Read less
                    </ReviewReadMoreButton>
                  </ReviewTextParagraph>
                );
              }

              return <ReviewTextParagraph key={index}>{item}</ReviewTextParagraph>;
            })}
      </ReviewText>
      <ReviewImages>
        {body_img.map((img, index) => (
          <ReviewImg key={index} src={img} />
        ))}
      </ReviewImages>
    </ReviewBodyWrapper>
  );
};

export default ReviewBody;
