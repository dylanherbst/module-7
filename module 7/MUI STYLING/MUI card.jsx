import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import MUIForm from './MUI form';
import { Button, CardActionArea, CardActions } from '@mui/material';
// wraps the default MUI Card component to customise it with props

export default function CustomCard({title, Btntext, children}) {


return (
    
<Card sx={{ maxWidth: 345, bgcolor: 'lightblue' }}>
<CardActionArea>
<CardMedia component="img" height="140" alt="iguana"
image="https://mui.com/static/images/cards/contemplative-reptile.jpg" />
<CardContent>
<Typography gutterBottom variant="h5" component="div">
{title}
</Typography>
<Typography variant="body2" color="text.secondary">
{children}
</Typography>
</CardContent>
</CardActionArea>
<CardActions>
<Button size="small" color="primary">{Btntext}</Button>
</CardActions>
</Card>
);
}
