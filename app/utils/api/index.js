import engine from 'store/src/store-engine';
import localStorage from 'store/storages/localStorage';

const store = engine.createStore([localStorage], []);
const getStoragePath = (key) => `servers/${key}`;

const servers = {
  cities: APP_ENV_API_CITIES,
  services: APP_ENV_API_SERVICES,
};

export function getServer(serverId) {
  return store.get(getStoragePath(serverId)) || servers[serverId];
}

export function getUrl(serverId, uri) {
  return `${getServer(serverId)}${uri}`;
}

export function setServer(serverId, serverUrl) {
  return store.set(getStoragePath(serverId), serverUrl);
}
