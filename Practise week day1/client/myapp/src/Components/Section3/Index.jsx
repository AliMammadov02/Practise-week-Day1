import './Index.css';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import axios from 'axios';
import React, { useEffect, useState } from 'react';

export default function ActionAreaCard() {
    const [data, setData] = useState([]);

    useEffect(()=>{
        axios.get("http://localhost:5000/users")
        .then((res)=>{
            setData(res.data)
        })
    })


  return (
<>
    <section>
    <h1 className='Teachersh1'>Our Teachers</h1>
    <p className='TeachersP'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magnam repellat aut<br /> neque! Doloribus sunt non aut reiciendis, vel recusandae obcaecati hic dicta<br /> repudiandae in quas quibusdam ullam, illum sed veniam!</p>
    </section> 
    <div className='Cards'>
         {(data.map((element) => (
            <Card key={element.id} sx={{ minWidth: 275 }} className='Card'>
                <CardContent>
                <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                    <img src={element.imageUrl} className='cardImage'/>
                </Typography>
                <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                    {element.userName}
                </Typography>
                <Typography variant="h5" component="div">
                    {element.jobName}
                </Typography>
                <Typography>
                {element.about}
                </Typography>
                </CardContent>
            </Card>
        )))}

</div>

</>
  );
}










 <section>
<h1 className='Teachersh1'>Our Teachers</h1>
<p className='TeachersP'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magnam repellat aut<br /> neque! Doloribus sunt non aut reiciendis, vel recusandae obcaecati hic dicta<br /> repudiandae in quas quibusdam ullam, illum sed veniam!</p>
</section> 