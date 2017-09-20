angular.module("appModule")
.directive('appPie', function() {
    return {
        template : `
            <footer>
                <p>Antonia Domínguez Pozo - Badajoz, 20/09/2017</p>
            </footer>
        `,
        restrict :'AE'
    }
})