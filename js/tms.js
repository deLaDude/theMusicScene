/**
 * Setup global namespace for TMS 
 */
var tms = {
	utils: {},
  viewmodels: {},
  factories: {},
  app: {},
  constants: {
		events: {
			tt: {
				songChange: "newsong",
				songSnag: "snagged",
				voteUpdate: "update_votes",

				userUpdate: "update_user", // fired when someone is fanned
				
				chatMessage: "speak",

				userEnter: "registered",
				userLeave: "deregistered"
			}
		},
		ttErrors: {
			alreadyVoted: "User has already voted up",
			alreadySnagged: "Duplicate song request has already been logged"
		}
	}
};