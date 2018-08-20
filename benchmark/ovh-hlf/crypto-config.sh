
rm ~/workspace/src/bootstrap/crypto-config ~/workspace/src/bootstrap/channel-artifacts -r

scp -r root@ns3026552.ip-51-255-64.eu:~/hlf-bootstrap-network/crypto-config ~/workspace/src/bootstrap/crypto-config
scp -r root@ns3026552.ip-51-255-64.eu:~/hlf-bootstrap-network/channel-artifacts ~/workspace/src/bootstrap/channel-artifacts

