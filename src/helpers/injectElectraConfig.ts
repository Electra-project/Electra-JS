// tslint:disable

import { DAEMON_USER_DIR_PATH } from '../constants'

export default function() {
  const electraConfigFilePath = `${DAEMON_USER_DIR_PATH}/Electra.conf`
  const fs = require('fs')

  if (fs.existsSync(electraConfigFilePath)) return

  if (!fs.existsSync(DAEMON_USER_DIR_PATH)) {
    fs.mkdirSync(DAEMON_USER_DIR_PATH)
  }

  fs.writeFileSync(electraConfigFilePath, `
    listen=1
    daemon=1
    server=1
    rpcuser=user
    rpcpassword=pass
    rpcallowip=127.0.0.1
    rpcport=5788
    addnode=175.156.111.14:5817
    addnode=174.89.254.197:5817
    addnode=76.176.172.191:5817
    addnode=162.227.19.41:5817
    addnode=88.212.41.190:5817
    addnode=89.64.23.106:5817
    addnode=216.36.9.43:5817
    addnode=79.68.133.50:5817
    addnode=91.64.5.29:5817
    addnode=78.46.11.116:5817
    addnode=54.254.206.188:5817
    addnode=62.195.3.233:5817
    addnode=92.244.140.34:5817
    addnode=104.196.150.38:5817
    addnode=175.143.236.83:5817
    addnode=184.18.171.147:5817
    addnode=50.117.145.211:5817
    addnode=88.113.185.228:5817
    addnode=75.17.247.94:5817
    addnode=90.83.233.236:5817
    addnode=47.36.123.215:5817
    addnode=24.234.131.6:5817
    addnode=151.225.177.2:5817
    addnode=176.9.28.175:5817
    addnode=99.246.246.176:5817
    addnode=89.153.148.115:5817
    addnode=47.184.165.5:5817
    addnode=77.244.2.4:5817
    addnode=115.64.32.141:5817
    addnode=92.98.87.47:5817
    addnode=138.130.233.149:5817
    addnode=74.215.142.69:5817
    addnode=74.210.155.65:5817
    addnode=188.63.226.42:5817
    addnode=18.196.53.82:5817
    addnode=153.177.70.226:5817
    addnode=151.230.177.29:5817
    addnode=86.95.52.11:5817
    addnode=155.186.129.162:5817
    addnode=85.148.161.65:5817
    addnode=207.81.71.16:5817
    addnode=71.81.57.214:5817
    addnode=172.113.240.185:5817
    addnode=94.112.252.211:5817
    addnode=209.205.120.214:5817
    addnode=24.164.144.57:5817
    addnode=68.129.98.197:5817
    addnode=37.59.75.197:5817
    addnode=71.7.234.19:5817
    addnode=24.71.249.172:5817
    addnode=188.158.86.177:5817
    addnode=24.209.226.87:5817
    addnode=201.221.25.146:5817
    addnode=86.89.201.242:5817
    addnode=66.130.219.21:5817
    addnode=72.89.39.234:5817
    addnode=104.172.14.100:5817
    addnode=69.71.3.226:5817
    addnode=118.243.79.238:5817
    addnode=76.178.141.194:5817
    addnode=66.91.2.250:5817
    addnode=2.236.186.175:5817
    addnode=115.75.5.161:5817
    addnode=219.73.96.212:5817
    addnode=68.197.64.2:5817
    addnode=184.254.90.175:5817
    addnode=99.225.116.84:5817
    addnode=99.249.0.228:5817
    addnode=81.207.37.77:5817
    addnode=146.255.183.207:5817
    addnode=24.216.97.215:5817
    addnode=77.56.204.71:5817
    addnode=87.88.121.198:5817
    addnode=207.38.255.59:5817
    addnode=80.13.33.145:5817
    addnode=23.83.37.240:5817
    addnode=94.69.154.9:5817
    addnode=199.204.33.5:5817
    addnode=185.159.157.11:5817
    addnode=96.249.253.77:5817
    addnode=108.252.26.155:5817
    addnode=74.196.29.206:5817
    addnode=202.180.117.214:5817
    addnode=71.85.54.160:5817
    addnode=84.86.115.125:5817
    addnode=217.101.13.195:5817
    addnode=218.42.211.93:5817
    addnode=184.91.69.255:5817
    addnode=87.236.212.145:5817
    addnode=24.6.183.21:5817
    addnode=62.194.72.84:5817
    addnode=188.100.48.102:5817
    addnode=206.53.87.40:5817
    addnode=84.86.214.197:5817
    addnode=120.188.87.101:5817
    addnode=179.52.57.43:5817
    addnode=173.79.94.125:5817
    addnode=218.191.110.150:5817
    addnode=71.140.147.6:5817
    addnode=108.51.34.254:5817
    addnode=188.178.127.106:5817
    addnode=198.52.94.127:5817
    addnode=74.220.173.232:5817
    addnode=61.92.178.51:5817
    addnode=85.18.252.192:5817
    addnode=94.212.98.11:5817
    addnode=106.68.252.146:5817
    addnode=24.17.198.123:5817
    addnode=218.229.81.81:5817
    addnode=83.233.110.142:5817
    addnode=212.120.229.20:5817
    addnode=31.18.250.22:5817
    addnode=176.212.144.217:5817
    addnode=77.38.26.225:5817
    addnode=113.169.125.120:5817
    addnode=79.40.246.173:5817
    addnode=92.167.37.16:5817
    addnode=67.7.104.144:5817
    addnode=93.10.24.200:5817
    addnode=178.233.148.151:5817
    addnode=73.232.121.33:5817
    addnode=178.249.129.121:5817
    addnode=85.109.117.99:5817
  `
    .replace(/^\s+/gm, '')
    .replace(/^\n/m, ''))
}
