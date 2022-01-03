import { Container, Grid, Typography } from "@mui/material";
import React from "react";
import about from "../../Images/about.jpg";
import Footer from "../../Shared/Footer/Footer";
import Header from "../../Shared/Header/Header";

const AboutUs = () => {
	return (
		<>
			<Header />
			<Container sx={{ pt: 2, pb: 5 }}>
				<Typography
					className='textColor'
					sx={{ fontWeight: 900, mb: 2, color: "#02598b" }}
					variant='h3'
					component='div'
					gutterBottom>
					About Us
				</Typography>

				<Grid alignItems='center' container spacing={2}>
					<Grid item md={4} xs={12}>
						<img
							src={about}
							style={{ width: "300px", height: "450px", margin: "0 auto" }}
							alt=''
						/>
					</Grid>
					<Grid item md={8} xs={12}>
						<Typography variant='body2' sx={{ textAlign: "left" }}>
							Lorem ipsum dolor sit amet consectetur adipisicing elit.
							Aspernatur quidem quos, excepturi ratione voluptas necessitatibus
							perferendis eius molestias, nesciunt laborum quia sed, delectus
							perspiciatis illum laboriosam! Quaerat tenetur voluptatibus, nemo
							quia facilis aspernatur fugiat commodi a temporibus velit. In eum
							<br />
							<br />
							voluptates quaerat fugit, est maiores sapiente! Ratione totam ea
							ipsa laudantium ducimus. Eos veritatis perferendis alias quam
							minus vero, et repudiandae officiis accusamus dolorem repellendus
							tempora, iste laudantium iure? Mollitia quia quibusdam repellendus
							minima architecto doloribus sapiente animi, dolor porro aut est
							sunt enim minus. Exercitationem laboriosam repellendus
							<br />
							<br />
							consequuntur velit nam dolorem ex, numquam repellat eveniet sequi
							ipsa! Dolores doloribus quidem cupiditate ducimus? Quam dolor
							fugit temporibus quidem tempore earum. Laboriosam non adipisci cum
							exercitationem, neque tenetur modi tempore sit est ratione
							quibusdam perspiciatis autem dignissimos nesciunt explicabo totam
							quam impedit commodi quasi quae! Illo molestiae pariatur esse
							natus distinctio magnam numquam repellendus, tenetur in eos
							<br />
							<br />
							aliquam non molestias adipisci amet neque vitae, sapiente ipsam?
							Natus, quo doloremque. Eum reprehenderit sunt vitae ducimus unde
							obcaecati neque rerum dolore adipisci alias aut labore laudantium,
							fugiat dolorum sint. Veritatis quasi dolorum voluptate non in
							animi, reiciendis neque vitae distinctio at cum et ipsa quidem
							explicabo omnis officiis optio aliquam error officia ut.
						</Typography>
					</Grid>
				</Grid>
			</Container>
			<Footer />
		</>
	);
};

export default AboutUs;
