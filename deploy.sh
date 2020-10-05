openssl aes-256-cbc -K $encrypted_dfdcfd5172af_key -iv $encrypted_dfdcfd5172af_iv -in deploy_key.enc -out ./deploy_key -d
eval "$(ssh-agent -s)"
chmod 600 ./deploy_key
echo -e "Host $SERVER_IP_ADDRESS\n\tStrictHostKeyChecking no\n" >> ~/.ssh/config
ssh-add ./deploy_key
ssh -i ./deploy_key -t -t root@159.203.99.76 << EOF
    pwd
    echo "deploy.sh running..."
    cd /var/www/react-jayclim
    pwd
    git pull origin master
    npm install
    npm run build
    service apache2 restart
    exit 0
EOF
exit 0