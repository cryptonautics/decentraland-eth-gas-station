


const gasStationEntity = new Entity();
gasStationEntity.addComponent(new GLTFShape("models/ETHGasStation.glb"));
gasStationEntity.addComponent(new Transform({
  position: new Vector3(8, 1, 8)
}));
engine.addEntity(gasStationEntity);


const PRICE_TEXT_COLOR = new Color3(0, 0, 0);

const transparentMaterial = new Material();
transparentMaterial.albedoColor = new Color4(0, 0, 0, 0);


const frontPanelEntity = new Entity();
frontPanelEntity.addComponent(new PlaneShape());
frontPanelEntity.addComponent(new Transform({
  position: new Vector3(-0.255, 1, 0),
  scale: new Vector3(2, 2, 1),
  rotation: Quaternion.Euler(0, 90, 0)
}))
engine.addEntity(frontPanelEntity);

frontPanelEntity.addComponent(transparentMaterial);

const frontPanelFastTextShape = new TextShape("");
frontPanelFastTextShape.fontSize = 2;
frontPanelFastTextShape.hTextAlign = "center";
frontPanelFastTextShape.color = PRICE_TEXT_COLOR;

const frontPanelFastTextEntity = new Entity();
frontPanelFastTextEntity.addComponent(frontPanelFastTextShape);
frontPanelFastTextEntity.addComponent(
  new Transform({
    position: new Vector3(0.2, 0.2375, 0),
    scale: new Vector3(1, 1, 1),
    rotation: Quaternion.Euler(0, 0, 0)
  })
);
engine.addEntity(frontPanelFastTextEntity);
frontPanelFastTextEntity.setParent(frontPanelEntity);

const frontPanelAverageTextShape = new TextShape("");
frontPanelAverageTextShape.fontSize = 2;
frontPanelAverageTextShape.hTextAlign = "center";
frontPanelAverageTextShape.color = PRICE_TEXT_COLOR;

const frontPanelAverageTextEntity = new Entity();
frontPanelAverageTextEntity.addComponent(frontPanelAverageTextShape);
frontPanelAverageTextEntity.addComponent(
  new Transform({
    position: new Vector3(0.2, -0.0625, 0),
    scale: new Vector3(1, 1, 1),
    rotation: Quaternion.Euler(0, 0, 0)
  })
);
engine.addEntity(frontPanelAverageTextEntity);
frontPanelAverageTextEntity.setParent(frontPanelEntity);

const frontPanelSafeLowTextShape = new TextShape("");
frontPanelSafeLowTextShape.fontSize = 2;
frontPanelSafeLowTextShape.hTextAlign = "center";
frontPanelSafeLowTextShape.color = PRICE_TEXT_COLOR;

const frontPanelSafeLowTextEntity = new Entity();
frontPanelSafeLowTextEntity.addComponent(frontPanelSafeLowTextShape);
frontPanelSafeLowTextEntity.addComponent(
  new Transform({
    position: new Vector3(0.2, -0.3625, 0),
    scale: new Vector3(1, 1, 1),
    rotation: Quaternion.Euler(0, 0, 0)
  })
);
engine.addEntity(frontPanelSafeLowTextEntity);
frontPanelSafeLowTextEntity.setParent(frontPanelEntity);

frontPanelEntity.setParent(gasStationEntity);


const backPanelEntity = new Entity();
backPanelEntity.addComponent(new PlaneShape());
backPanelEntity.addComponent(new Transform({
  position: new Vector3(0.255, 1, 0),
  scale: new Vector3(2, 2, 1),
  rotation: Quaternion.Euler(0, 270, 0)
}))
engine.addEntity(backPanelEntity);

backPanelEntity.addComponent(transparentMaterial);

const backPanelFastTextShape = new TextShape("");
backPanelFastTextShape.fontSize = 2;
backPanelFastTextShape.hTextAlign = "center";
backPanelFastTextShape.color = PRICE_TEXT_COLOR;

const backPanelFastTextEntity = new Entity();
backPanelFastTextEntity.addComponent(backPanelFastTextShape);
backPanelFastTextEntity.addComponent(
  new Transform({
    position: new Vector3(0.2, 0.2375, 0),
    scale: new Vector3(1, 1, 1),
    rotation: Quaternion.Euler(0, 0, 0)
  })
);
engine.addEntity(backPanelFastTextEntity);
backPanelFastTextEntity.setParent(backPanelEntity);

const backPanelAverageTextShape = new TextShape("");
backPanelAverageTextShape.fontSize = 2;
backPanelAverageTextShape.hTextAlign = "center";
backPanelAverageTextShape.color = PRICE_TEXT_COLOR;

const backPanelAverageTextEntity = new Entity();
backPanelAverageTextEntity.addComponent(backPanelAverageTextShape);
backPanelAverageTextEntity.addComponent(
  new Transform({
    position: new Vector3(0.2, -0.0625, 0),
    scale: new Vector3(1, 1, 1),
    rotation: Quaternion.Euler(0, 0, 0)
  })
);
engine.addEntity(backPanelAverageTextEntity);
backPanelAverageTextEntity.setParent(backPanelEntity);

const backPanelSafeLowTextShape = new TextShape("");
backPanelSafeLowTextShape.fontSize = 2;
backPanelSafeLowTextShape.hTextAlign = "center";
backPanelSafeLowTextShape.color = PRICE_TEXT_COLOR;

const backPanelSafeLowTextEntity = new Entity();
backPanelSafeLowTextEntity.addComponent(backPanelSafeLowTextShape);
backPanelSafeLowTextEntity.addComponent(
  new Transform({
    position: new Vector3(0.2, -0.3625, 0),
    scale: new Vector3(1, 1, 1),
    rotation: Quaternion.Euler(0, 0, 0)
  })
);
engine.addEntity(backPanelSafeLowTextEntity);
backPanelSafeLowTextEntity.setParent(backPanelEntity);

backPanelEntity.setParent(gasStationEntity);


const ETH_GAS_STATION_API_URL: string = 'https://ethgasstation.info/api/ethgasAPI.json';

class GasPriceFetcher {

  private api_url: string = ETH_GAS_STATION_API_URL;

  public fetchEveryTime: number;
  public currentTime: number;

  public currFast: number = 0;
  public currAverage: number = 0;
  public currSafeLow: number = 0;

  constructor(fetchEveryTime: number) {

    this.fetchEveryTime = fetchEveryTime;

  }

  updatePrices(): void {

    frontPanelFastTextShape.value = (this.currFast).toString();
    frontPanelAverageTextShape.value = (this.currAverage).toString();
    frontPanelSafeLowTextShape.value = (this.currSafeLow).toString();

    backPanelFastTextShape.value = (this.currFast).toString();
    backPanelAverageTextShape.value = (this.currAverage).toString();
    backPanelSafeLowTextShape.value = (this.currSafeLow).toString();
    
  }

  fetchPrices(): void {

    executeTask(async () => {

      try {

        let response = await fetch(this.api_url);

        if (response.status === 200) {

          let json = await response.json();

          let fetchedFast = json.fast;
          if (fetchedFast !== null) {

            this.currFast = fetchedFast;

          }

          let fetchedAverage = json.average;
          if (fetchedAverage !== null) {

            this.currAverage = fetchedAverage;

          }

          let fetchedSafeLow = json.safeLow;
          if (fetchedSafeLow !== null) {

            this.currSafeLow = fetchedSafeLow;

          }

        }

      } catch {

        log("Failed to reach API endpoint URL");

      }

    });

  }

}


class GasPriceFetcherSystem implements ISystem {

  private gasPriceFetcher: GasPriceFetcher;

  constructor(gasPriceFether: GasPriceFetcher) {

    this.gasPriceFetcher = gasPriceFether;

  }

  update(dt: number): void {

    this.gasPriceFetcher.updatePrices();

    if (this.gasPriceFetcher.currentTime >= 0) {

      this.gasPriceFetcher.currentTime -= dt;

    } else {

      this.gasPriceFetcher.fetchPrices();
      this.gasPriceFetcher.currentTime = this.gasPriceFetcher.fetchEveryTime;

    }

  }

}


const FETCH_EVERY_TIME = 10;
const myGasPriceFetcher = new GasPriceFetcher(FETCH_EVERY_TIME);

engine.addSystem(new GasPriceFetcherSystem(myGasPriceFetcher));


