import React from "react"
import {
  Divider,
  HPReviewcardContainerDiv,
  ImageDiv,
  LikeDiv,
  ProfileDiv,
  ReviewDiv,
  ReviewerWithRating,
  TitleWrapper,
} from "./HomepageReviewCard.style"

export default function HomepageReviewCard({
  business,
  likes,
  title,
  description,
  reviewer,
  rating,
  type,
}: {
  business: string
  likes: string
  title: string
  description: string
  reviewer: string
  rating: number
  type: string
}) {
  return (
    <HPReviewcardContainerDiv type={type}>
      <TitleWrapper>
        <ProfileDiv>
          <ImageDiv>
            <text>
              {business[0].toUpperCase()}.{business[1].toUpperCase()}
            </text>
          </ImageDiv>
          <h1>{business}</h1>
        </ProfileDiv>
        <LikeDiv>
          <div>{likes}</div>
          <img src="/assets/love.svg" />
        </LikeDiv>
      </TitleWrapper>
      <ReviewDiv>
        <h3>{`"${title}"`}</h3>
        <p>{description}</p>
      </ReviewDiv>
      <Divider />
      <ReviewerWithRating>
        <ProfileDiv>
          <img
            src={`https://scontent.fktm3-1.fna.fbcdn.net/v/t39.30808-6/275553225_3103996389859867_4359725175914116503_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=cGY8-0Q_UrcAX-d7c2m&tn=QY4Uxzqzq-2V4a39&_nc_ht=scontent.fktm3-1.fna&oh=00_AfALwbzhockXdDXMccikdZsxxPE7-9hLyOKjibZgxq6vMQ&oe=63F4CC2E`}
            alt={`Profile Image`}
          />
          <h1>{reviewer}</h1>
        </ProfileDiv>
        <LikeDiv>
          <div>{rating}</div>
          <img src={`/assets/star.svg`} />
        </LikeDiv>
      </ReviewerWithRating>
    </HPReviewcardContainerDiv>
  )
}
