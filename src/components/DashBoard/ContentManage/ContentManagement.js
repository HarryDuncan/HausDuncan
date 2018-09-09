import React from 'react';
import '../DashboardStyles.scss';
import {Route} from "react-router-dom";
import { HashLink as Link } from 'react-router-hash-link';
import { PieceForm } from './';
export function ContentManagement() {

return(
	<div className="dashboardMain">
	<h1 className="SectionTitle">Content Managment</h1>

		<div className="Options container">
			<div className="Section col-md-4">
				<h1> Edit Pieces </h1>
				<p>Edit uploaded pieces </p>
				<button className="btn btn-primary">Edit</button>
			</div>

			<div className="Section col-md-4">
				<h1> Add Pieces </h1>
				<p>add new pieces </p>
				<button className="btn btn-primary"><Link className='link' to='/Dashboard/ContentManagement/AddPiece'>Add</Link></button>
			</div>

			<div className="Section col-md-4">
				<h1> Add Section </h1>
				<p>add a new section to gallery </p>
				<button className="btn btn-primary">Add Section</button>
			</div>

			<div className="Section col-md-4">
				<h1> Edit Homepage photos </h1>
				<p> Add, delete or update photos and videos </p>
				<button className="btn btn-primary">Edit Photos</button>
			</div>
		</div>

			<div className="ActionSection">
			<Route  path='/Dashboard/ContentManagement/AddPiece' render={PieceForm} />
			</div>
			</div>
		)
	
}