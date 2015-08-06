var gulp = require('gulp'),
    gp_concat = require('gulp-concat'),
    gp_rename = require('gulp-rename'),
    gp_uglify = require('gulp-uglify'),
    del = require("del");

gulp.task('js-fef', function(){
    return gulp.src([ "assets/js/vendor/underscore.js", "assets/js/vendor/angular-route.js",
                   "assets/js/app/url_utils.js", "assets/js/app/utils.js", "assets/js/app/outlet_survey_service.js",
                   "assets/js/app/surveys_list.js", "assets/js//app/surveys_create.js", "assets/js/app/surveys.js",
                   "assets/js/app/locations/create.js", "assets/js/app/locations/list.js", "assets/js/app/locations/details.js",
                   "assets/js/app/locations/edit.js","assets/js/app/locations/locations.js",
                   "assets/js/app/non_traditional_outlets/gateway_service.js", "assets/js/app/non_traditional_outlets/list.js",
                   "assets/js/app/non_traditional_outlets/create.js",  "assets/js/app/non_traditional_outlets/edit.js",
                   "assets/js/app/non_traditional_outlets/non_traditional_outlet_survey.js",
                   "assets/js/app/hotspots/gateway_service.js", "assets/js/app/hotspots/list.js", "assets/js/app/hotspots/create.js",
                   "assets/js/app/hotspots/edit.js", "assets/js/app/hotspots/hotspots_surveys.js",
                   "assets/js/app/traditional_outlets/gateway_service.js", "assets/js/app/traditional_outlets/list.js",
                   "assets/js/app/traditional_outlets/create.js", "assets/js/app/traditional_outlets/edit.js", "assets/js/app/traditional_outlets/traditional_outlet_survey.js",
                   "assets/js/app/pasmo_crud_app.js"])
        .pipe(gp_concat('concat.js'))
        .pipe(gulp.dest('dist'))
        .pipe(gp_rename('pasmo.min.js'))
        .pipe(gp_uglify())
        .pipe(gulp.dest('public/js'));
});

gulp.task('default', ['js-fef'], function(){
    del(['dist']);
});