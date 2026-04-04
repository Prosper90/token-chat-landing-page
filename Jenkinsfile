pipeline {
    agent any
    
    environment {
        NVM_DIR = "/root/.nvm"
        BASE_DIR = "/home"
        GIT_CREDENTIALS = credentials('momo-token') // Define in Jenkins credentials
        REPO_URL = "https://${GIT_CREDENTIALS}@github.com/Prosper90/token-chat-landing-page"
    }
    
    stages {
        
        stage('Pull Latest Code') {
            steps {
                script {
                    // Navigate to the correct directory and pull the latest code in one step
                    sh """
                        cd /home/token-chat-landing-page
                        git pull ${REPO_URL}
                    """
                }
            }
        }

        stage('Restart Application with PM2') {
            steps {
                script {
                    // Restart the app with PM2
                    sh '''
                     bash -lc "
                    pm2 -v
                    cd /home/token-chat-landing-page
                    bun install
                    bun run build
                    pm2 restart token-chat-landing-page
                    "
                    '''
                }
            }
        }
    }
}