import * as React from "react";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import Avatar from "@mui/material/Avatar";

const ArticleCard = ({ article, createdDate, onClick }) => {
  return (
    <Card className="cards" onClick={onClick}>
      <CardHeader
        avatar={
          <Avatar>
            <img
              className="avatar"
              src="https://media.istockphoto.com/id/1196083861/vector/simple-man-head-icon-set.jpg?s=612x612&amp;w=0&amp;k=20&amp;c=a8fwdX6UKUVCOedN_p0pPszu8B4f6sjarDmUGHngvdM="
            ></img>
          </Avatar>
        }
        title={article.title}
      />

      <CardMedia component="img" height="194" image={article.article_img_url} />
      <CardContent className="card-content-date">
        {createdDate}
        Author: {article.author}
      </CardContent>
      <p className="card-votes-comments">
        Votes: {article.votes} <br />
        Comments: {article.comment_count} <br />
      </p>
    </Card>
  );
};

export default ArticleCard;
