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
                  <ReviewTextParagraph>
                    {item}
                    <ReviewReadMoreButton onClick={showMoreHandler}>
                      Read more
                    </ReviewReadMoreButton>
                  </ReviewTextParagraph>
                );
              }

              return <ReviewTextParagraph>{item}</ReviewTextParagraph>;
            })
          : bodyParagraphs.map((item, index) => {
              if (index === lastParagraphIndex) {
                return (
                  <ReviewTextParagraph>
                    {item}
                    <ReviewReadMoreButton onClick={showMoreHandler}>
                      Read less
                    </ReviewReadMoreButton>
                  </ReviewTextParagraph>
                );
              }

              return <ReviewTextParagraph>{item}</ReviewTextParagraph>;
            })}
      </ReviewText>
      <ReviewImages>
        {body_img.map((img) => (
          <ReviewImg src={img} />
        ))}
      </ReviewImages>
    </ReviewBodyWrapper>
  );
};

export default ReviewBody;
