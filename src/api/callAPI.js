import axios from 'axios';
import { changeInCol, deleteTask } from '../redux';

const baseUrl = 'http://localhost:5000/taskmanage';

export const API = {
	async firstCall() {
		return await axios.get(baseUrl);
	},

	async createTask(task) {
		return await axios.post(baseUrl + '/create/task', { task });
	},

	async editTask(task) {
		return await axios.put(baseUrl + `/tasks/${task._id}`, { task });
	},

	async deleteTask(id) {
		return await axios.delete(baseUrl + `/delete/${id}`);
	},

	async changeCol(data) {
		return await axios.put(baseUrl + `/columns`, { data });
	},
};
