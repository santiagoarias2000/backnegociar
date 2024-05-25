import express from "express";
import cors from "cors";
import morgan from "morgan";
import routesApiUser from "../../routes/UserRoutes";
import routesApiProperty from "../../routes/PropertyRoutes";
import routesApiNeighbor from "../../routes/NeighborhoodRoutes";

class Server {
  public app: express.Application;

  constructor() {
    this.app = express();
    this.startSetting();
    this.activateRoutes();
  }

  public startSetting(): void {
    this.app.set("PORT", 3123);
    this.app.use(cors());
    this.app.use(morgan("dev"));
    this.app.use(express.json({ limit: "100mb" }));
    this.app.use(express.urlencoded({ extended: true }));
  }

  public activateRoutes(): void {
    this.app.use('/api/user',routesApiUser);
    this.app.use('/api/property', routesApiProperty);
    this.app.use('/api/neighbor', routesApiNeighbor);
  }
  public start(): void {
    this.app.listen(this.app.get("PORT"), () => {
      console.log("Server on port", this.app.get("PORT"));
    });
  }
}
export default Server;
