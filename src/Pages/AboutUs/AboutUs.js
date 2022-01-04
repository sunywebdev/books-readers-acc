import { Container, Grid, Typography } from "@mui/material";
import React from "react";
import about from "../../Images/about.jpg";
import Footer from "../../Shared/Footer/Footer";
import Header from "../../Shared/Header/Header";

const AboutUs = () => {
	return (
		<>
			<Header />
			<Container sx={{ pt: 2, pb: 3}}>
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
						<Typography variant='h5' sx={{ textAlign: "left" }}>
							About Reading Group Choices:
						</Typography>
						<Typography variant='h6' sx={{ textAlign: "left" }}>
							Reading Group Choices has been selecting discussible books for
							reading groups since 1994.
						</Typography>
						<Typography variant='body2' sx={{ textAlign: "left" }}>
							Reading Group Choices partners with publishers, independent
							bookstores, public libraries, and authors to develop resources to
							enhance the shared reading group experience.
							<br />
							We look forward to recommending titles that will inspire lively
							discussions for many years to come!
							<br />
							<br />
							Given the busy lifestyles of today, another variation on the
							traditional 'book club' is the book reading club. In such a club,
							the group agrees on a specific book, and each week (or whatever
							frequency), one person in the group reads the book out loud while
							the rest of the group listens. The group can either allow
							interruptions for comments and questions from the members at any
							time, or agree to allow such input at chapter or section endings.
							Such a club makes reading a shared experience and frees the busy
							members from the "homework" of having read the book before coming
							to the club. It also creates a lively environment for commenting
							on the specifics of the books as it is read and can lead to very
							enriching exchanges. A given book may continue for several
							sittings, depending on the pace of reading, frequency of meetings,
							and the extent of comments and discussion. Members can take turns
							reading to share the reading responsibility. Another variation on
							the concept could be jointly listening to an audio-book with
							pauses for comments. Once a book is completed, members recommend
							their choices of the new books and vote on which book to proceed
							with next.
						</Typography>
					</Grid>
				</Grid>
			</Container>
			<Footer />
		</>
	);
};

export default AboutUs;
