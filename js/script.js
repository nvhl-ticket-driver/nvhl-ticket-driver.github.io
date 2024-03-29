function showQuestions() {
    var questionSets = document.querySelectorAll('.question-set');
    questionSets.forEach(function (set) {
        set.classList.remove('visible');
    });

    var selectedOption = document.getElementById('type').value;

    var questionSet = document.getElementById(selectedOption + 'Questions');
    if (questionSet) {
        questionSet.classList.add('visible');
    }

    var callbackSection = document.getElementById('callbackSection');
    callbackSection.style.display = selectedOption !== 'placeholder' ? 'flex' : 'none';
    
    var callerSection = document.getElementById('callerSection');
    callerSection.style.display = selectedOption !== 'placeholder' ? 'flex' : 'none';
    
    var nameSection = document.getElementById('nameSection');
    nameSection.style.display = selectedOption !== 'placeholder' ? 'flex' : 'none';
    
    var hhidSection = document.getElementById('hhidSection');
    hhidSection.style.display = selectedOption !== 'placeholder' ? 'flex' : 'none';
}


function generateOutput() {
    var selectedOption = document.getElementById('type').value;
    var questionSet = document.getElementById(selectedOption + 'Questions');
    var callbacknum = document.getElementById('callbacknum').value;
    var caller = document.getElementById('caller').value;
    var firstLast = document.getElementById('firstLast').value;
    var hhidField = document.getElementById('hhidField').value;
    var generalropreason = document.getElementById('generalropreason').value;
    var ropdocument = document.getElementById('ropdocument').value;
    var incomeropreason = document.getElementById('incomeropreason').value;
    var appincome = document.getElementById('appincome').value;
    var pdmdocument = document.getElementById('pdmdocument').value;
    var pdmsource = document.getElementById('pdmsource').value;
    var reinstateplan = document.getElementById('reinstateplan').value;
    var nonpayment = document.getElementById('nonpayment').value;
    var reinstateefdates = document.getElementById('reinstateefdates').value;
    var reinstatenet = document.getElementById('reinstatenet').value;
    var carriername = document.getElementById('carriername').value;
    var backdate = document.getElementById('backdate').value;
    var etdcplanname = document.getElementById('etdcplanname').value;
    var etdcnet= document.getElementById('etdcnet').value;
    var etdccsr = document.getElementById('etdccsr').value;
    var enfplan = document.getElementById('enfplan').value;
    var enfdates = document.getElementById('enfdates').value;
    var enfnet = document.getElementById('enfnet').value;
    var oldhhid = document.getElementById('oldhhid').value;
    var oldpolicy = document.getElementById('oldpolicy').value;
    var oldcarrier = document.getElementById('oldcarrier').value;
    var cancel = document.getElementById('cancel').value;
    var correcthhid = document.getElementById('correcthhid').value;
    var correctpolicy = document.getElementById('correctpolicy').value;
    var correctcarrier = document.getElementById('correctcarrier').value;
    var dupsummary = document.getElementById('dupsummary').value;
    var ticaccount = document.getElementById('ticaccount').value;
    var agentname = document.getElementById('agentname').value;
    var agentlisted = document.getElementById('agentlisted').value;
    var currentaddress = document.getElementById('currentaddress').value;
    var refundammount = document.getElementById('refundammount').value;
    var refundreason = document.getElementById('refundreason').value;
    var refundterm = document.getElementById('refundterm').value;
    var refundmonths = document.getElementById('refundmonths').value;
    var refundname = document.getElementById('refundname').value;
    var refundnet = document.getElementById('refundnet').value;
    var refundcsr = document.getElementById('refundcsr').value;
    var apploopagent = document.getElementById('apploopagent').value;
    var fiveerroragent = document.getElementById('fiveerroragent').value;
    var nullagent = document.getElementById('nullagent').value;
    var agentRadio = document.getElementById('pwagent');
    var consumerRadio = document.getElementById('pwconsumer');
    var pwagentname = document.getElementById('pwagentname').value;
    
    toggleEmail();
    
    if (questionSet) {
        var outputText = "";

        questionSet.querySelectorAll('input[type="text"]').forEach(function (input) {
            var question = input.previousElementSibling.innerText.replace(':', '').trim();
            var answer = input.value;
            
        });
        
        switch (selectedOption) {
        case 'rop':
            outputText += firstLast + " (ID:" + hhidField + ")" + " is requesting to have their coverage reinstated due to being terminated for not providing the proper documentation in the requested timeframe. The consumer stated they did not upload the documentation required because " + generalropreason + ". The consumer will provide proof of their " + ropdocument + ". I have provided the HH I.D#, TIC#, and FAX# for the documentation to be attached to the ticket. I let the consumer know they have 7 days to provide their documentation. The ticket will be closed if documents have not been received within the 7-day period. The consumer stated that they are willing to pay any balance to bring their account to current status.";
            break;
                
        case 'incomeRop':
            outputText += firstLast + " (ID:" + hhidField + ")" + " is requesting to have their tax credits reapplied due to being removed for not providing the proper documentation in the requested timeframe. The consumer stated they did not upload the documentation required because of " + incomeropreason + ". The consumer will provide proof of their INCOME in the amount of $" + appincome + ". The consumer will upload their documentation on their dashboard. I let the consumer know they have 7 days to provide their documentation. The ticket will be closed if documents have not been received within the 7-day period. The consumer stated that they are willing to pay any balance to bring their account to current status.";
            break;
                
        case 'pdm':
            outputText += firstLast + " (ID:" + hhidField + ")" + " is requesting to have their coverage reinstated due to being terminated for not providing the proper documentation in the requested timeframe. The consumer will provide proof of their " + pdmdocument + ". I have provided the HH I.D#, TIC#, and FAX# for the documentation to be attached to the ticket. I let the consumer know they have 7 days to provide their documentation. The ticket will be closed if documents have not been received within the 7-day period. The consumer stated that they are willing to pay any balance to bring their account to current status." + "<br>" + firstLast + " (ID:" + hhidField + ")" + " was advised that they will need to clear up the issue with the " + pdmsource + ", where this is information is being obtained.";
            break;
                
        case 'carrierReinstatement':
            outputText += firstLast + " (ID:" + hhidField + ")" + " is requesting to have their " + reinstateplan + " plan reinstated due to being terminated for nonpayment. The consumer stated they did not pay due to " + nonpayment + ". I advised the consumer they will need to pay any past due amounts to become current. " + firstLast + " stated that they are willing to pay any balance to reinstate their plan." + "<br>" + "Carrier: " + carriername + "<br>" + "Plan: " + reinstateplan + "<br>" + "Effective Dates: " + reinstateefdates + "<br>" + "Net Premium: " + reinstatenet;
            break;
                
        case 'etdc':
            outputText += firstLast + " (ID:" + hhidField + ")" + " called in because " + backdate + ". Due to the consumer not being able to complete the effective date form online themselves, the form was completed on their behalf. The form has been attached to the ticket. I also informed the consumer that they have seven days to get in the proper documentation or the request will be rejected per our policy. Fax number & Household ID have been provided." + "<br>" + "Plan: " + etdcplanname + "<br>" + "Net Premium: " + etdcnet + "<br>" + "CSRs: " + etdccsr;
            break;
                
        case 'enf':
            outputText += firstLast + " (ID:" + hhidField + ")" + " called in because the carrier is unable to see their " + enfplan + " enrollment. We are requesting to have the information sent to the carrier since the plan is showing active and accurate in our system." + "<br>" + "Plan:" + enfplan + "<br>" + "Effective Dates: " + enfdates + "<br>" + "Net Premium: " + enfnet;
            break;
                
        case 'pw':
            if (agentRadio.checked) {
                outputText += "Agent " + pwagentname + " called in because they are unable to get the account unlocked. I have changed the status of the account to active & have exhausted my options on triaging the situation. Ticket has been created to get the Agent access to their account. The agent " + emailAccessText + " have access to the email on file.";
                pwAgentSection.style.display = 'block';
            } else if (consumerRadio.checked) {
                outputText += "Consumer " + firstLast + " (ID:" + hhidField + ") called in because they are unable to get the account unlocked. I have changed the status of the account to active & have exhausted my options on triaging the situation. Ticket has been created to get the consumer access to their account. The consumer " + emailAccessText + " have access to the email on file.";
                pwAgentSection.style.display = 'none';
            }
            break;

                
        case 'duplicate':
            outputText += "-Cancelled Policy:" + "<br>" + "Household ID: " + oldhhid + "<br>" + "Policy ID: " + oldpolicy + "<br>" + "Carrier: " + oldcarrier + "<br>" + "Cancellation date the consumer has requested: " + cancel + 
            "<br>" + "-Keep:" + "<br>" + "Household ID: " + correcthhid + "<br>" + "Policy ID: " + correctpolicy + "<br>" + "Carrier: " + correctcarrier + "<br>" + "- Summary / Notes: " + dupsummary + "<br>" + "Is the ticket being created on the account with the new policy: " + ticaccount;
            break;
                
        case 'aor':
            outputText += "Agent " + agentname + " called in stating that thay are is not getting commission for " + firstLast + " (ID:" + hhidField + ")" + ", I have verified that the consumer is listed in the agent's book of business, and I have also verified that the agent " + agentlisted + " listed on the current enrollment. The agent is requesting that this is investigated so he is properly compensated and listed correctly.";
            break;
                
        case '1095A':
            outputText += firstLast + " (ID:" + hhidField + ")" + " is requesting to have their 1095A remailed to the following address:" + "<br>" + currentaddress + "<br><br>" + "The consumer has stated they do not have access to the account or the email on file and would prefer it sent in paper format.";
            break;
                
        case 'refund':
            outputText += firstLast + " (ID:" + hhidField + ")" + " called in because they are requesting a refund for the amount of " + refundammount + " due to " + refundreason + ". The policy has been terminated for " + refundterm + ", so the consumer should not have been billed for the month of " + refundmonths + ". I have informed the consumer that they have 7 days to provide proof showing the premium being drafted out of their account/billed." + "<br><br>" + "Plan: " + refundname + "<br>" + "Net Premium: " + refundnet + "<br>" + "CSRs: " + refundcsr;
            break;
                
        case 'appLoop':
            outputText += "Agent "+ apploopagent + " called needing assistance on updating consumer " + firstLast + " (ID:" + hhidField + ")'s " + "income. After completing the application, the dashboard states “Edit application” or “Start New Application” and does not save the updated app. I went to the My Applications tab and saw the updated app under past applications. Please review and assist.";
            break;
                
        case '500Error':
            outputText += "Agent " + fiveerroragent + " called in stating that there is a 500-error message that populates on the screen when they submit the consumer " + firstLast + " (ID:" + hhidField + ")'s application. Attached is a screenshot of the message. I had the agent change their browser and attempted to triage the issue but received the same message on my end. Please assist, consumer wants to submit the app so they can shop for plans.";
            break;
                
        case 'nullError':
            outputText += "Agent " + nullagent + " completed an application for consumer " + firstLast + " (ID:" + hhidField + ")" + " and after completing the application the dashboard has a Null Null Error as being a member of the household. Please review and assist.";
            break;
                
        default:
            break;
    }
        
        outputText += "<br>" + "<br>" + "Caller: " + caller + "<br>";
        outputText += "Callback Number: " + callbacknum + "<br>";

        document.getElementById('output').innerHTML = outputText;
        
        var outputPanel = document.getElementById('output-panel');
        outputPanel.style.width = '100%';
        outputPanel.style.margin = '10px';
        outputPanel.style.padding = '20px';
        outputPanel.style.borderColor = 'forestgreen';
        outputPanel.style.borderWidth = '5px';
        outputPanel.style.borderStyle = 'solid';
        outputPanel.style.boxShadow = '0 0 8px 8px rgba(34, 139, 34, 0.4)';
        
        document.getElementById('copy-output-button').classList.add('generated');
    }
}

function toggleAgent(show) {
    var pwAgentSection = document.getElementById('pwAgentSection');
    pwAgentSection.style.display = show ? 'block' : 'none';
}

function toggleEmail() {
    var emailAccessCheckbox = document.getElementById('emailaccess');
    var emailAccess = emailAccessCheckbox.checked;

    if (emailAccess) {
        emailAccessText = "does";
    } else {
        emailAccessText = "doesn't";
    }
}

function clearForm() {
    var inputs = document.querySelectorAll('input[type="text"], input[type="number"], select, textarea');

    inputs.forEach(function (input) {
        input.value = '';
    });
    
    document.getElementById('firstLast').value = '';
    document.getElementById('nameSection').style.display = 'none';
    
    document.getElementById('hhidField').value = '';
    document.getElementById('hhidSection').style.display = 'none';

    document.getElementById('callbacknum').value = '';
    document.getElementById('callbackSection').style.display = 'none';
    
    document.getElementById('caller').value = '';
    document.getElementById('callerSection').style.display = 'none';

    document.getElementById('type').selectedIndex = 0;

    var questionSets = document.querySelectorAll('.question-set');
    questionSets.forEach(function (set) {
        set.classList.remove('visible');
    });

    document.getElementById('output').innerHTML = '';

    var outputPanel = document.getElementById('output-panel');
    outputPanel.style.width = '100%';
    outputPanel.style.margin = '10px';
    outputPanel.style.padding = '20px';
    outputPanel.style.borderColor = 'mediumslateblue';
    outputPanel.style.borderWidth = '3px';
    outputPanel.style.borderStyle = 'solid';
    outputPanel.style.boxShadow = 'none';

    document.getElementById('copy-output-button').classList.remove('generated');
}

function copyOutput() {
    var outputContent = document.getElementById('output').innerText;

    var textarea = document.createElement('textarea');
    textarea.value = outputContent;
    document.body.appendChild(textarea);
    textarea.select();
    document.execCommand('copy');
    document.body.removeChild(textarea);

    alert('Ticket copied to clipboard!');
}