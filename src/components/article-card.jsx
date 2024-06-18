import * as React from "react";
import { styled } from "@mui/material/styles";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Collapse from "@mui/material/Collapse";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShareIcon from "@mui/icons-material/Share";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? "rotate(0deg)" : "rotate(180deg)",
  marginLeft: "auto",
  transition: theme.transitions.create("transform", {
    duration: theme.transitions.duration.shortest,
  }),
}));

const ArticleCard = ({ article, createdDate }) => {
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Card className="cards">
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
      <CardMedia
        component="img"
        height="194"
        image={article.article_img_url}
        alt={article.title}
      />
      <CardContent className="card-content-date">
        {createdDate}
        Author: {article.author}
      </CardContent>
      <CardActions disableSpacing>
        Votes: {article.votes} <br />
        Comments: {article.comment_count} <br />
        <IconButton aria-label="Votes">
          <FavoriteIcon />
        </IconButton>
        <IconButton aria-label="share">
          <ShareIcon />
        </IconButton>
        <ExpandMore
          expand={expanded}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show Comments"
        >
          <ExpandMoreIcon />
        </ExpandMore>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography paragraph>{article.content}</Typography>
        </CardContent>
      </Collapse>
    </Card>
  );
};

export default ArticleCard;
