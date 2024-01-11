import axios from "axios";
import { $host } from "..";

export class ProductViewerService {
  static createViewer = async (viewerData) => {
    const response = await $host.post("api/viewer", viewerData);
    return response;
  };
}
