import { NavLink } from "react-router-dom";
import backgrdImg from ".././asets/img/background.jpg";
const TableRow = (props) => {
	return (
		<tr>
			<th scope="row">{props.index + 1}</th>
			<td>
				<NavLink to={"/profile/" + props.id}>
					{props.lastname} {props.name}
				</NavLink>
			</td>
		</tr>
	);
};

export const Friends = (props) => {
	let users = props.function();
	let usersCount = Object.keys(users).length;
	let userRow = [];

	for (let i = 0; i < usersCount; i++) {
		userRow.push(<TableRow id={users[i].id} key={i} index={i} name={users[i].name} lastname={users[i].lastname} />);
	}
	return (
		<>
		<div className="row">
			<table className="table table-striped">
				<thead>
					<tr>
						<th scope="col">#</th>
						<th scope="col">Фамилия и имя</th>
					</tr>
				</thead>
				<tbody>{userRow}</tbody>
			</table>
		</div>
		<div className="row mt-5">
			<div className="col-md-6" style={{backgroundImage: 'url(${backgrdImg})'}}>lorem</div>
			<div className="col-md-6">lorem</div>
		</div>
		</>
	);
};