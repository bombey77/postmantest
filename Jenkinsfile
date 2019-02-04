pipeline {
	agent any

	stages {
		stage ('Compile Tests') {

			steps {
				sh 'newman run collection4.json -e environment4.json'
			
			}
		}
    }
}
