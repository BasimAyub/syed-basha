import React from "react";
import Header from "../components/header";
import Footer from "../components/footer";

export default function HomePage() {
	return (
		<div>
            <Header page={1} />
            <Footer/>
		</div>
	);
}
