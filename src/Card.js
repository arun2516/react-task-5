import Rating from '@mui/material/Rating';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';


function Cards(props){
    const{id,image_link,rating,price,description,name} = props;
    return(
        <Card style={{marginTop:"30px"}} sx={{ maxWidth: 345 }} >
            <img className="img-pic" src={image_link} alt={name} style={{objectFit:"cover",marginLeft:"70px"}}/>
            <CardContent>
            <Typography gutterBottom variant="h5" component="div" >{name}</Typography>
            <Rating name="read-only" value={rating} readOnly />
            <Typography style={{fontWeight:"bold"}} variant="body2" color="text.secondary">Price:- ${price}</Typography>
            <Typography variant="body2" color="text.secondary">{description}</Typography>
            </CardContent>
            <CardActions>
        <Button size="small">Share</Button>
        <Button size="small">Learn More</Button>
      </CardActions>
        </Card>
    )
}

export default Cards;