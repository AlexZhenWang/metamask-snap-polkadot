import {Wallet} from "../../../src/interfaces";
import sinon from "sinon";

export class WalletMock implements Wallet {
  public registerRpcMessageHandler = sinon.stub();
  public getAppKey = sinon.stub();
  public getPluginState = sinon.stub();
  public send = sinon.stub();
  public updatePluginState = sinon.stub();
  public registerApiRequestHandler = sinon.stub();

  public reset(): void {
    this.registerRpcMessageHandler.reset();
    this.getAppKey.reset();
    this.getPluginState.reset();
    this.send.reset();
    this.updatePluginState.reset();
    this.registerApiRequestHandler.reset();
  }
}