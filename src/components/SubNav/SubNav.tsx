import { StateUpdater, useEffect, useState } from "preact/hooks";

// styles
import "./SubNav.css";

// Types
export interface Props {
	setCurrentSubNavItem: StateUpdater<"overview" | "structure" | "geology">;
	currentSubNavItem: "overview" | "structure" | "geology";
}

function SubNav(props: Props) {
	const { setCurrentSubNavItem, currentSubNavItem } = props;

	function setContent(e): void {
		setCurrentSubNavItem(e.target.id);
	}

	useEffect(() => {
		const subNavItems = document.querySelectorAll(".sub-nav__item");

		subNavItems.forEach((item) => {
			item.id === currentSubNavItem
				? item.classList.add("selected")
				: item.classList.remove("selected");
		});
	}, [currentSubNavItem]);

	return (
		<nav class="sub-nav">
			<div
				class="sub-nav__item selected"
				id="overview"
				onClick={setContent}
			>
				<p class="mobile">Overview</p>
				<p class="desk">
					<span>01</span> Overview
				</p>
			</div>
			<div class="sub-nav__item" id="structure" onClick={setContent}>
				<p class="desk">
					<span>02</span> Internal Structure
				</p>
				<p class="mobile">Structure</p>
			</div>
			<div class="sub-nav__item" id="geology" onClick={setContent}>
				<p class="desk">
					<span>03</span> Surface Geology
				</p>
				<p class="mobile">Geology</p>
			</div>
		</nav>
	);
}

export default SubNav;
