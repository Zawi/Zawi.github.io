angular.module('templates-app', ['about/about.tpl.html', 'home/home.tpl.html']);

angular.module("about/about.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("about/about.tpl.html",
    "<div class=\"container\">\n" +
    "    <div class=\"row\">\n" +
    "        <h1>What is it?</h1>\n" +
    "\n" +
    "        <p>\n" +
    "            This web app is designed to help you <strong>wake up with the sounds you like</strong>.\n" +
    "            They may be songs, mixes, playlists, recorded radio shows or live web radio stations! <br/>\n" +
    "            Setting an alarm is as easy as choosing the time and pasting the link of a website.\n" +
    "            You can manage a <strong>list of alarms</strong> which will still be there when you come back another time. <br/>\n" +
    "            This app can be used on a computer with speakers or a mobile; you only need to keep the browser opened.\n" +
    "        </p>\n" +
    "    </div>\n" +
    "\n" +
    "    <div class=\"row\">\n" +
    "        <h3>Allowed links</h3>\n" +
    "\n" +
    "        <p>\n" +
    "            All links are allowed!\n" +
    "            You can copy and paste links from <strong>Youtube</strong>, <strong>TuneIn</strong>,\n" +
    "            <strong>SoundCloud</strong>, <strong>DI.fm</strong> and many more!\n" +
    "            You can use links to <strong>local files</strong> too. <br/>\n" +
    "            Just make sure that a sound is played directly when the window is opened.\n" +
    "        </p>\n" +
    "    </div>\n" +
    "\n" +
    "    <div class=\"row\">\n" +
    "        <h3>Pop-up policy</h3>\n" +
    "\n" +
    "        <p>\n" +
    "            Please <strong>allow pop-ups</strong> in order to open the links when time has come.\n" +
    "            Nowadays, browsers block pop-ups by default to prevent from SPAMs, undesired commercial content...\n" +
    "            You can test the permissions of your browser by setting an alarm in one minute.\n" +
    "            If there is an alert, please choose to \"Allow pop-ups on this site\". <br/>\n" +
    "            Pop-up ads will never come.\n" +
    "        </p>\n" +
    "    </div>\n" +
    "    <div class=\"row\">\n" +
    "        <h3>Credits</h3>\n" +
    "\n" +
    "        <p>\n" +
    "            This web app has been built in JavaScript using <a href=\"https://angularjs.org/\">Angular.js</a>,\n" +
    "            and based on <a href=\"http://joshdmiller.github.io/ng-boilerplate/\">ngBoilerplate</a>.\n" +
    "            For now, it only runs client-side. <br/>\n" +
    "            This app is <strong>open-source</strong> and the code is available on <a href=\"https://www.github.com/zawi/internet-alarm\">GitHub</a>.\n" +
    "            You can participate by forking the projet, finding bugs or asking for new features.\n" +
    "        </p>\n" +
    "    </div>\n" +
    "</div>\n" +
    "");
}]);

angular.module("home/home.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("home/home.tpl.html",
    "<div class=\"jumbotron home-intro\">\n" +
    "    <span class=\"current-time\">{{now | date: $root.timeFormat}}</span>\n" +
    "    <br/>\n" +
    "    <label class=\"checkbox-inline\">\n" +
    "        <input type=\"checkbox\" ng-model=\"$root.toggleTimeFormat\" checked /> 24h format\n" +
    "    </label>\n" +
    "    <h1>The Internet Alarm</h1>\n" +
    "\n" +
    "    <p class=\"lead\">\n" +
    "        Wake up with your favorite songs and radio shows!\n" +
    "    </p>\n" +
    "</div>\n" +
    "\n" +
    "<div class=\"container\">\n" +
    "    <form ng-submit=\"addAlarm()\" class=\"form-inline\">\n" +
    "        <input type=\"number\" min=\"0\" max=\"23\" ng-model=\"newAlarmHour\" class=\"form-control\" placeholder=\"Hour\"/>\n" +
    "        <input type=\"number\" min=\"0\" max=\"59\" ng-model=\"newAlarmMinute\" class=\"form-control\" placeholder=\"Minute\"/>\n" +
    "        <input type=\"text\" ng-model=\"newAlarmURL\" class=\"form-control\" placeholder=\"URL\"/>\n" +
    "        <button class=\"btn btn-primary\">New Alarm</button>\n" +
    "    </form>\n" +
    "    <div class=\"table-responsive alarms-table\">\n" +
    "        <table class=\"table\">\n" +
    "            <thead>\n" +
    "                <tr>\n" +
    "                    <th style=\"width: 5em;\"></th>\n" +
    "                    <th>Time</th>\n" +
    "                    <th>URL</th>\n" +
    "                    <th>Remaining</th>\n" +
    "                    <th style=\"width: 10em;\"></th>\n" +
    "                </tr>\n" +
    "            </thead>\n" +
    "            <tbody>\n" +
    "                <tr ng-repeat=\"alarm in alarms | orderBy:['!enabled','time']\" class=\"row-enabled-{{alarm.enabled}}\">\n" +
    "                    <td>\n" +
    "                        <input type=\"checkbox\" ng-model=\"alarm.enabled\"/>\n" +
    "                    </td>\n" +
    "                    <td>\n" +
    "                        <span ng-if=\"!isEditingAlarm(alarm)\">\n" +
    "                            {{alarm.time | date: $root.shortTimeFormat}}\n" +
    "                        </span>\n" +
    "                        <span ng-if=\"isEditingAlarm(alarm)\">\n" +
    "                            <input type=\"number\" min=\"0\" max=\"23\" class=\"form-control\" value=\"{{alarm.time.getHours()}}\" ng-model=\"alarm.copy.hours\" placeholder=\"Hour\"/>\n" +
    "                            <input type=\"number\" min=\"0\" max=\"59\" class=\"form-control\" value=\"{{alarm.time.getMinutes()}}\" ng-model=\"alarm.copy.minutes\" placeholder=\"Minute\"/>\n" +
    "                        </span>\n" +
    "                    </td>\n" +
    "                    <td class=\"alarm-url\">\n" +
    "                        <span ng-if=\"!isEditingAlarm(alarm)\">\n" +
    "                            <a href=\"{{alarm.url}}\" target=\"_blank\">{{alarm.url}}</a>\n" +
    "                        </span>\n" +
    "                        <span ng-if=\"isEditingAlarm(alarm)\">\n" +
    "                            <input type=\"text\" class=\"form-control\" ng-model=\"alarm.copy.url\" value=\"{{alarm.url}}\" placeholder=\"URL\"/>\n" +
    "                        </span>\n" +
    "                    </td>\n" +
    "                    <td>\n" +
    "                        <span ng-if=\"!isEditingAlarm(alarm)\" data-time-remaining>\n" +
    "\n" +
    "                        </span>\n" +
    "                        <span ng-if=\"isEditingAlarm(alarm)\">\n" +
    "                            <button type=\"button\" class=\"btn btn-primary\" ng-click=\"updateAlarm(alarm)\">Validate</button>\n" +
    "                            <button type=\"button\" class=\"btn btn-default\" ng-click=\"toggleEditingAlarm(alarm)\">Cancel</button>\n" +
    "                        </span>\n" +
    "                    </td>\n" +
    "                    <td>\n" +
    "                        <i class=\"fa fa-edit alarm-action alarm-edit\" ng-click=\"toggleEditingAlarm(alarm)\"></i>\n" +
    "                        <i class=\"fa fa-times alarm-action alarm-remove\" ng-click=\"removeAlarm(alarm)\"></i>\n" +
    "                    </td>\n" +
    "                </tr>\n" +
    "            </tbody>\n" +
    "        </table>\n" +
    "    </div>\n" +
    "\n" +
    "    <div class=\"alert alert-warning\">\n" +
    "        You need to <strong>allow pop-ups</strong> on this site for the URL to open correctly.\n" +
    "        <i class=\"fa fa-info-circle\" tooltip=\"You can test the current behavior by setting an alarm in one minute\"></i>\n" +
    "    </div>\n" +
    "</div>");
}]);
