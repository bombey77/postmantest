pipeline {
	agent any

	stages {
		stage ('Compile Tests') {

			steps {
				sh 'newman run collection4.json -e environment4.json'
			
			}
		}
		
		stage ('Writing cities') {

			steps {
				sh 'node test2.js'
			
			}
		}
    }
}
