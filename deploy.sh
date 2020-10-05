ssh -i ./deploy_key root@159.203.99.76 pwd
echo "deploy.sh running..."
cd /var/www/react-jayclim
git pull origin master
npm run build
service apache2 restart