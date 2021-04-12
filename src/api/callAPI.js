import axios from 'axios';
// https://server-intern-idra.herokuapp.com
const baseUrl = 'http://localhost:5000/taskmanage';

export const API = {
	async loadData() {
		return await axios.get(baseUrl);
	},

	async createTask(task) {
		return await axios.post(baseUrl + '/create/task', { task });
	},

	async editTask(task) {
		return await axios.put(baseUrl + `/tasks/${task._id}`, { task });
	},

	async deleteTask(data) {
		return await axios.delete(baseUrl + `/delete/${data.taskId}`, { data });
	},

	async changeCol(data) {
		return await axios.put(baseUrl + `/columns`, { data });
	},
};
