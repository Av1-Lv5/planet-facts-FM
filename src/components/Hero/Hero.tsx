// Dependencies
import { useEffect, useState } from "preact/hooks";

// Components
import SubNav from "../SubNav/SubNav";

// Styles
import "./Hero.css";

// Types
import type { PlanetObj } from "../../types/PlanetObj";
export interface Props {
	currentPlanetObj: PlanetObj;
}

function Hero(props: Props) {
	const { currentPlanetObj } = props;

	const [currentSubNavItem, setCurrentSubNavItem] = useState<
		"overview" | "structure" | "geology"
	>("overview");

	const [imageToLoad, setImgToLoad] = useState<
		"planet" | "internal" | "geology"
	>("planet");

	useEffect(() => {
		currentSubNavItem === "overview" && setImgToLoad("planet");
		currentSubNavItem === "structure" && setImgToLoad("internal");
		currentSubNavItem === "geology" && setImgToLoad("geology");
	}, [currentSubNavItem]);

	return (
		<section class="hero">
			<SubNav
				setCurrentSubNavItem={setCurrentSubNavItem}
				currentSubNavItem={currentSubNavItem}
			/>
			<div class="planet-img">
				<img src={currentPlanetObj.images[imageToLoad]} />
			</div>
			<div class="data-container">
				<h1 class="planet-name">{currentPlanetObj.name}</h1>
				<p class="planet-content">
					{currentPlanetObj[currentSubNavItem].content}
				</p>
				<div class="data-source">
					<span>Source :</span>
					<a href={currentPlanetObj[currentSubNavItem].source}>
						Wikipedia
					</a>
				</div>
			</div>
		</section>
	);
}

export default Hero;
