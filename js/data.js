var teams = [
	{
		name: "Chicago Bulls",
		urlName: "chicago-bulls",
		logo: "bulls.jpg",
		championships: "'91, '92, '93, '96, '97, '98",
		rank: 15
	},
	{
		name: "Boston Celtics",
		urlName: "boston-celtics",
		logo: "celtics.jpg",
		championships: "'57, '59, '60, '61, '62, '63, '64, '65, '66, '68, '69, '74, '76, '81, '84, '86, '08",
		rank: 2
	},
	{
		name: "Los Angeles Lakers",
		urlName: "los-angeles-lakers",
		logo: "lakers.jpg",
		championships: "'49, '50, '52, '53, '54, '72, '80, '82, '85, '87, '88, '00, '01, '02, '09, '10",
		rank: 5
	},
	{
		name: "Cleveland Cavaliers",
		urlName: "cleveland-cavaliers",
		logo: "cavaliers.jpg",
		championships: "'16",
		rank: 20
	},
	{
		name: "Los Angeles Clippers",
		urlName: "los-angeles-clippers",
		logo: "clippers.jpg",
		championships: "None",
		rank: 25
	},
	{
		name: "Golden State Warriors",
		urlName: "golden-state-warriors",
		logo: "warriors.jpg",
		championships: "None",
		rank: 10
	}
]
var players = [
	{
		team: "chicago-bulls",
		name: "Zach LaVine",
		urlName: "zach-lavine",
		image: "zach-lavine.jpg",
		age: 25,
		height: "6'5\"",
		rank: 1,
		layout: "wide",
		description: "Zachary LaVine (born March 10, 1995) is an American professional basketball player for the Chicago Bulls of the National Basketball Association (NBA). He was selected in the first round of the 2014 NBA draft with the 13th overall pick by the Timberwolves. He is a two-time Slam Dunk Contest champion.",
		moreLink: "https://en.wikipedia.org/wiki/Zach_LaVine",
		stats2019: { pts: 1530, fgp: 45.0, ptp: 38.0, reb: 289, ast: 254, stl: 88, blk: 28 },
		statscareer: { pts: 6240, fgp: 44.7, ptp: 37.5, reb: 1279, ast: 1275, stl: 336, blk: 95 },
	},
	{
		team: "chicago-bulls",
		name: "Otto Porter Jr.",
		urlName: "otto-porter",
		image: "otto-porter.jpg",
		age: 27,
		height: "6'8\"",
		rank: 2,
		description: "Otto Porter Jr. is an American professional basketball player for the Chicago Bulls of the National Basketball Association. He played college basketball for the Georgetown Hoyas and was selected with the third overall pick in the 2013 NBA draft by the Washington Wizards. He was considered one of the top college basketball players before entering the NBA.",
		moreLink: "https://en.wikipedia.org/wiki/Otto_Porter",
		stats2019: { pts: 167, fgp: 44.3, ptp: 38.7, reb: 48, ast: 25, stl: 15, blk: 6 },
		statscareer: { pts: 4550, fgp: 48.2, ptp: 40.4, reb: 2037, ast: 618, stl: 486, blk: 183 },
	},
	{
		team: "chicago-bulls",
		name: "Denzel Valentine",
		urlName: "denzel-valentine",
		image: "denzel-valentine.jpg",
		age: 26,
		height: "6'5\"",
		rank: 3,
		description: "Denzel Robert Valentine is an American professional basketball player for the Chicago Bulls of the National Basketball Association. He played college basketball for the Michigan State Spartans. As a senior, Valentine became the first player in Michigan State history to be recognized as the National Player of the Year by The Associated Press. He also earned other player of the year awards from the NABC, USA Today, Sports Illustrated, NBC Sports, and Basketball Times in addition to being named a unanimous First-Team All-American. Valentine was selected with the 14th pick in the 2016 NBA Draft by the Chicago Bulls.",
		moreLink: "https://en.wikipedia.org/wiki/Denzel_Valentine",
		stats2019: { pts: 246, fgp: 40.9, ptp: 33.6, reb: 74, ast: 43, stl: 26, blk: 6 },
		statscareer: { pts: 1320, fgp: 40.1, ptp: 36.6, reb: 618, ast: 350, stl: 121, blk: 24 },
	},
	{
		team: "chicago-bulls",
		name: "Coby White",
		urlName: "coby-white",
		image: "coby-white.jpg",
		age: 20,
		height: "6'4\"",
		rank: 4,
		description: "Alec Jacoby \"Coby\" White is an American professional basketball player for the Chicago Bulls of the National Basketball Association. He played college basketball for the North Carolina Tar Heels. White was a top high school player in North Carolina, finishing his career as the top prep scorer in state history.",
		moreLink: "https://en.wikipedia.org/wiki/Coby_White",
		stats2019: { pts: 859, fgp: 39.4, ptp: 35.4, reb: 230, ast: 175, stl: 49, blk: 6 },
		statscareer: { pts: 859, fgp: 39.4, ptp: 35.4, reb: 230, ast: 175, stl: 49, blk: 6 },
	},
	{
		team: "boston-celtics",
		name: "Marcus Smart",
		urlName: "marcus-smart",
		image: "marcus-smart.jpg",
		age: 26,
		height: "6'4\"",
		rank: 4,
		description: "Marcus Osmond Smart is an American professional basketball player for the Boston Celtics of the National Basketball Association. He played college basketball for the Oklahoma State Cowboys before being drafted with the sixth overall pick in the 2014 NBA draft.",
		moreLink: "https://en.wikipedia.org/wiki/Marcus_Smart",
		stats2019: { pts: 714, fgp: 38, ptp: 34.8, reb: 204, ast: 257, stl: 86, blk: 27 },
		statscareer: { pts: 3888, fgp: 37.4, ptp: 31.8, reb: 1409, ast: 1594, stl: 615, blk: 148 },
	},
	{
		team: "boston-celtics",
		name: "Jayson Tatum",
		urlName: "jayson-tatum",
		image: "jayson-tatum.jpg",
		age: 22,
		height: "6'8\"",
		rank: 1,
		description: "Jayson Christopher Tatum is an American professional basketball player for the Boston Celtics of the National Basketball Association. A native of St. Louis, Missouri, Tatum attended hometown Chaminade College Preparatory School, where he was rated a five-star recruit and regarded as one of the top players in the Class of 2016 by recruiting services. He played college basketball for the Duke Blue Devils before entering the 2017 NBA draft. He was selected with the third overall pick by the Boston Celtics. He won the 2019 Skills Challenge during NBA All-Star Weekend.",
		moreLink: "https://en.wikipedia.org/wiki/Jayson_Tatum",
		stats2019: { pts: 1390, fgp: 44.8, ptp: 39.8, reb: 418, ast: 174, stl: 83, blk: 53 },
		statscareer: { pts: 3745, fgp: 45.6, ptp: 39.9, reb: 1297, ast: 470, stl: 250, blk: 168 },
	},
	{
		team: "boston-celtics",
		name: "Tacko Fall",
		urlName: "tacko-fall",
		image: "tacko-fall.jpg",
		age: 24,
		height: "7'6\"",
		rank: 5,
		description: "Elhadji Tacko Sereigne Diop Fall is a Senegalese professional basketball player for the Boston Celtics of the National Basketball Association, on a two-way contract with the Maine Red Claws of the NBA G League.",
		moreLink: "https://en.wikipedia.org/wiki/Tacko_Fall",
		stats2019: { pts: 19, fgp: 75, ptp: 0, reb: 11, ast: 0, stl: 0, blk: 2 },
		statscareer: { pts: 19, fgp: 75, ptp: 0, reb: 11, ast: 0, stl: 0, blk: 2 },
	},
	{
		team: "los-angeles-lakers",
		name: "LeBron James",
		urlName: "lebron-james",
		image: "lebron-james.jpg",
		age: 35,
		height: "6'8\"",
		rank: 1,
		description: "LeBron Raymone James Sr. is an American professional basketball player for the Los Angeles Lakers of the National Basketball Association. He is often regarded as the greatest basketball player of all time, which has resulted in frequent comparisons to Michael Jordan. His accomplishments include three NBA championships, four NBA MVP Awards, three NBA Finals MVP Awards, and two Olympic gold medals. Lebron's teams appeared in eight consecutive NBA Finals. Lebron leads with the record for all-time NBA playoffs points scored, is third in all-time NBA points scored, and eighth in all-time NBA assists. James was selected to the All-NBA First Team a record twelve times, made the All-Defensive First Team five times, played in sixteen NBA All-Star Games as All-Star MVP three times.",
		moreLink: "https://en.wikipedia.org/wiki/LeBron_James",
		stats2019: { pts: 1544, fgp: 49.8, ptp: 34.9, reb: 473, ast: 636, stl: 74, blk: 30 },
		statscareer: { pts: 34087, fgp: 50.4, ptp: 34.4, reb: 9353, ast: 9353, stl: 2011, blk: 951 },
	},
	{
		team: "los-angeles-lakers",
		name: "Anthony Davis",
		urlName: "anthony-davis",
		image: "anthony-davis.jpg",
		age: 27,
		height: "6'10\"",
		rank: 2,
		description: "Anthony Marshon Davis Jr. is an American professional basketball player for the Los Angeles Lakers of the National Basketball Association. He plays the power forward and center positions. Davis was the first overall pick in the 2012 NBA draft. He is a seven-time NBA All-Star and has been named to three All-NBA First Teams and three NBA All-Defensive Teams. He also earned a gold medal with the 2012 US Olympic team.",
		moreLink: "https://en.wikipedia.org/wiki/Otto_Porter",
		stats2019: { pts: 1467, fgp: 51.1, ptp: 33.5, reb: 517, ast: 172, stl: 82, blk: 134 },
		statscareer: { pts: 12526, fgp: 51.7, ptp: 31.9, reb: 5423, ast: 1154, stl: 721, blk: 1255 },
	},
	{
		team: "los-angeles-lakers",
		name: "Dwight Howard",
		urlName: "dwight-howard",
		image: "dwight-howard.jpg",
		age: 34,
		height: "6'11\"",
		rank: 3,
		description: "Dwight David Howard II is an American professional basketball player for the Los Angeles Lakers of the National Basketball Association. He is an eight-time All-Star, eight-time All-NBA Team honoree, five-time All-Defensive Team member, and three-time Defensive Player of the Year.",
		moreLink: "https://en.wikipedia.org/wiki/Dwight_Howard",
		stats2019: { pts: 468, fgp: 73.2, ptp: 60, reb: 457, ast: 42, stl: 27, blk: 76 },
		statscareer: { pts: 18582, fgp: 58.6, ptp: 13.2, reb: 13641, ast: 1577, stl: 1013, blk: 2127 },
	},
	{
		team: "cleveland-cavaliers",
		name: "Kevin Love",
		urlName: "kevin-love",
		image: "kevin-love.jpg",
		age: 31,
		height: "6'10\"",
		rank: 1,
		description: "Kevin Wesley Love is an American professional basketball player for the Cleveland Cavaliers of the National Basketball Association. He is a five-time All-Star and won an NBA championship with the Cavaliers in 2016. He was also a member of the gold medal-winning United States national team at the 2010 FIBA World Championship and the 2012 Summer Olympics.",
		moreLink: "https://en.wikipedia.org/wiki/Kevin_Love",
		stats2019: { pts: 987, fgp: 45, ptp: 37.4, reb: 547, ast: 178, stl: 33, blk: 19 },
		statscareer: { pts: 12993, fgp: 44.2, ptp: 37, reb: 7944, ast: 1696, stl: 486, blk: 322 },
	},
	{
		team: "cleveland-cavaliers",
		name: "Tristan Thompson",
		urlName: "tristan-thompson",
		image: "tristan-thompson.jpg",
		age: 29,
		height: "6'9\"",
		rank: 2,
		description: "Tristan Trevor James Thompson is a Canadian professional basketball player for the Cleveland Cavaliers of the National Basketball Association. He played one season of college basketball for Texas before being drafted fourth overall by the Cavaliers in the 2011 NBA draft. He also represents Canada in international competition. Thompson won an NBA championship with the Cavaliers in 2016.",
		moreLink: "https://en.wikipedia.org/wiki/Tristan_Thompson",
		stats2019: { pts: 684, fgp: 51.2, ptp: 39.1, reb: 577, ast: 120, stl: 33, blk: 50 },
		statscareer: { pts: 5839, fgp: 51.8, ptp: 28.1, reb: 5393, ast: 624, stl: 317, blk: 447 },
	},
	{
		team: "los-angeles-clippers",
		name: "Kawhi Leonard",
		urlName: "kawhi-leonard",
		image: "kawhi-leonard.jpg",
		age: 29,
		height: "6'7\"",
		rank: 1,
		layout: "wide",
		description: "Kawhi Anthony Leonard is an American professional basketball player for the Los Angeles Clippers of the National Basketball Association. He played two seasons of college basketball for the San Diego State Aztecs and was named a consensus second-team All-American as a sophomore. Leonard opted to forgo his final two seasons at San Diego State to enter the 2011 NBA draft. He was selected by the Indiana Pacers with the 15th overall pick before being traded to the San Antonio Spurs on draft night.",
		moreLink: "https://en.wikipedia.org/wiki/Kawhi_Leonard",
		stats2019: { pts: 1370, fgp: 46.9, ptp: 36.6, reb: 373, ast: 254, stl: 92, blk: 31 },
		statscareer: { pts: 9620, fgp: 49.1, ptp: 38.1, reb: 3323, ast: 1377, stl: 921, blk: 344 },
	},
	{
		team: "los-angeles-clippers",
		name: "Lou Williams",
		urlName: "lou-williams",
		image: "lou-williams.jpg",
		age: 33,
		height: "6'1\"",
		rank: 2,
		description: "Louis Tyrone Williams is an American professional basketball player for the Los Angeles Clippers of the National Basketball Association. He was selected out of high school by the Philadelphia 76ers with the 45th overall pick in the 2005 NBA draft. Williams spent seven seasons with Philadelphia before signing with the Atlanta Hawks in 2012, playing two seasons there before being traded to the Toronto Raptors in 2014. He was then named the NBA Sixth Man of the Year in 2015, 2018, and 2019. In March 2019, he became the NBA's career leader in points off the bench.",
		moreLink: "https://en.wikipedia.org/wiki/Lou_Williams",
		stats2019: { pts: 1119, fgp: 41.6, ptp: 36.3, reb: 186, ast: 344, stl: 40, blk: 10 },
		statscareer: { pts: 14424, fgp: 42, ptp: 35, reb: 2244, ast: 3438, stl: 874, blk: 181 },
	},
	{
		team: "los-angeles-clippers",
		name: "Paul George",
		urlName: "paul-george",
		image: "paul-george.jpg",
		age: 30,
		height: "6'9\"",
		rank: 3,
		description: "Paul Clifton Anthony George is an American professional basketball player for the Los Angeles Clippers of the National Basketball Association. He is a six-time NBA All-Star and five-time All-NBA Team selection, as well as a four-time member of the NBA All-Defensive Team.",
		moreLink: "https://en.wikipedia.org/wiki/Paul_George",
		stats2019: { pts: 880, fgp: 43.2, ptp: 39.9, reb: 241, ast: 162, stl: 56, blk: 20 },
		statscareer: { pts: 12863, fgp: 43.3, ptp: 38, reb: 4132, ast: 2162, stl: 1127, blk: 287 },
	},
	{
		team: "los-angeles-clippers",
		name: "Marcus Morris",
		urlName: "marcus-morris",
		image: "marcus-morris.jpg",
		age: 30,
		height: "6'9\"",
		rank: 4,
		description: "Marcus Thomas Morris Sr. is an American professional basketball player for Los Angeles Clippers of the National Basketball Association. The forward played college basketball at Kansas before being drafted 14th overall by the Houston Rockets in the 2011 NBA draft. He has also played for the Phoenix Suns, Detroit Pistons, Boston Celtics and New York Knicks.",
		moreLink: "https://en.wikipedia.org/wiki/Marcus_Morris_Sr.",
		stats2019: { pts: 114, fgp: 38.6, ptp: 28.3, reb: 48, ast: 18, stl: 8, blk: 10 },
		statscareer: { pts: 7248, fgp: 43.1, ptp: 36.7, reb: 2795, ast: 905, stl: 421, blk: 168 },
	},
	{
		team: "golden-state-warriors",
		name: "Stephen Curry",
		urlName: "stephen-curry",
		image: "stephen-curry.jpg",
		age: 32,
		height: "6'3\"",
		rank: 1,
		description: "Wardell Stephen \"Steph\" Curry II is an American professional basketball player for the Golden State Warriors of the National Basketball Association. A six-time NBA All-Star, Curry has been named the NBA Most Valuable Player twice and won three NBA championships with the Warriors. Considered as one of the greatest Point Guard in history. Many players and analysts have called him the greatest shooter in NBA history. He is credited with revolutionizing the game of basketball by inspiring teams to regularly utilize the three-point shot.",
		moreLink: "https://en.wikipedia.org/wiki/Stephen_Curry",
		stats2019: { pts: 104, fgp: 40.2, ptp: 24.5, reb: 26, ast: 33, stl: 5, blk: 2 },
		statscareer: { pts: 16419, fgp: 47.6, ptp: 43.5, reb: 3158, ast: 4621, stl: 1205, blk: 156 },
	},
]

var teamTemplate = `
	{{#teams}}
	<a href="items.html?category={{urlName}}">
	<div class="container">
		<img src="img/{{logo}}" class="top-image">
		<div class="content">
			<div class="team-name">
				{{name}}
			</div>
			<div class="title">National Champion:</div>
			<div class="text">{{championships}}</div>
			<div class="bubble" title="overall ranking">{{rank}}</div>
		</div>
	</div>
	</a>
	{{/teams}}
`;

var playerTemplate = `
	{{#players}}
	<a href="item-detail.html?item={{urlName}}">
		<div class="container {{layout}}">
			<img src="img/{{image}}" class="top-image">
			<div class="content">
				<div class="team-name">
					{{name}}
				</div>
				<div class="title">Age:</div>
				<div class="text">{{age}}</div>
				<div class="title">Height:</div>
				<div class="text">{{height}}</div>
				<div class="bubble" title="team ranking">{{rank}}</div>
			</div>
		</div>
	</a>
	{{/players}}
`;

var playerDetailTemplate = `
	<div class="detail">
		<div class="page-photo">
			<img src="img/{{image}}">
		</div>
		<div class="info-box">
			<div class="box-title">2019 regular season stats</div>
			<div class="box-cell">Pts</div>
			<div class="box-cell">FG%</div>
			<div class="box-cell">3pt%</div>
			<div class="box-cell">Reb</div>
			<div class="box-cell">Ast</div>
			<div class="box-cell">Stl</div>
			<div class="box-cell">Blk</div>
			<div class="box-cell">{{stats2019.pts}}</div>
			<div class="box-cell">{{stats2019.fgp}}</div>
			<div class="box-cell">{{stats2019.ptp}}</div>
			<div class="box-cell">{{stats2019.reb}}</div>
			<div class="box-cell">{{stats2019.ast}}</div>
			<div class="box-cell">{{stats2019.stl}}</div>
			<div class="box-cell">{{stats2019.blk}}</div>
		</div>
		<div class="info-box">
			<div class="box-title">career stats</div>
			<div class="box-cell">Pts</div>
			<div class="box-cell">FG%</div>
			<div class="box-cell">3pt%</div>
			<div class="box-cell">Reb</div>
			<div class="box-cell">Ast</div>
			<div class="box-cell">Stl</div>
			<div class="box-cell">Blk</div>
			<div class="box-cell">{{statscareer.pts}}</div>
			<div class="box-cell">{{statscareer.fgp}}</div>
			<div class="box-cell">{{statscareer.ptp}}</div>
			<div class="box-cell">{{statscareer.reb}}</div>
			<div class="box-cell">{{statscareer.ast}}</div>
			<div class="box-cell">{{statscareer.stl}}</div>
			<div class="box-cell">{{statscareer.blk}}</div>
		</div>
	</div>
	<div style="clear:both"></div>
	<div class="section-title">ABOUT</div>
	<div class="description">{{description}} <a href="{{{moreLink}}}" target="_blank">more...</a>
	</div>
`;

function loadTeamData(teamsTag = "teams") {
	var teamData = {
		teams: teams
	}
	var teamHtml = Mustache.render(teamTemplate, teamData);
    document.getElementById(teamsTag).innerHTML = teamHtml; 
}

function loadPlayerData(teamName, playersTag = "player-data") {
	var teamPlayers = players.filter(p => p.team === teamName);
	var playerData = {
		players: teamPlayers
	}
	var playersHtml = Mustache.render(playerTemplate, playerData);
    document.getElementById(playersTag).innerHTML = playersHtml;
}

function loadPlayerDetail(playerName, detailTag = "player-detail") {
	var playerInfo = players.find(p => p.urlName === playerName);
	var detailHtml = Mustache.render(playerDetailTemplate, playerInfo);
    document.getElementById(detailTag).innerHTML = detailHtml; 
}
