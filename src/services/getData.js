import API from "./api";
import { useStore } from "../useStore";

export const getMembers = async () => {
  try {
    const response = await API.get('/api/teams/getmembers');
    useStore.setState({ Members: response.data.members });
    console.log(useStore.getState().Members);
    return response.data.members;
  } catch (error) {
    console.error('Error fetching members:', error);
  }
};