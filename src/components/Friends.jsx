import { NavLink } from "react-router-dom";
import backgrImg from ".././assets/img/background.jpg";

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
		userRow.push(
			<TableRow
				id={users[i].id}
				key={i}
				index={i}
				name={users[i].name}
				lastname={users[i].lastname}
			/>
		);
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
				<div className="col-xl-6 p-5 text-white" style={{backgroundImage: `url(${backgrImg})`}}>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam cum, fugiat laudantium
					repellat, aut voluptas totam cumque dicta magni iusto dolor! Error placeat laborum officia
					repellat quis a eveniet ab?
				</div>
				<div className="col-xl-6 p-5">
					Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto illum fuga voluptate
					natus incidunt eos voluptatum ducimus! Minima temporibus earum quis atque, deleniti, ipsa
					consectetur voluptates doloremque laborum vitae quia?
				</div>
			</div>
		</>
	);
};