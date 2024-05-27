
		function cleari() {
			$('.ii').each(function(i) {
				$(this).val('');
			})
			clearesults();
		}



		function clearesults() {
			$('.result').each(function(i) {
				$(this).html('');
			})
		}

	var totalinpt = document.getElementsByTagName('input');
	
	for (i = 0; i < totalinpt.length; i++) {
		if (i == totalinpt.length - 1) {
			var calbutton = totalinpt[i];
			calbutton.addEventListener('click', function() {
	
				var odbx = $('#odbx').html();
				var odfx = $('#odfx').html();
				var oddx = $('#oddx').html();
				var odax = $('#odax').html();
				var odex = $('#odex').html();
				var odcx = $('#odcx').html();
	
				var rstbx = $('#rstbx').val();
				var rstfx = $('#rstfx').val();
				var rstdx = $('#rstdx').val();
				var rstax = $('#rstax').val();
				var rstex = $('#rstex').val();
				var rstcx = $('#rstcx').val();
	
	
				if (odbx !== '' && $.trim(odbx).length > 0 && $.isNumeric(odbx)) {
					if (rstbx !== '' && $.trim(rstbx).length > 0 && $.isNumeric(rstbx)) {
	
						if (odbx * 1000 > rstbx * 1000) {
							var tobig = new BigNumber(odbx);
							$('#sbx').html('[Out] ' + (tobig.minus(rstbx)).toFixed(4));
						} else if (odbx * 1000 - rstbx * 1000 == 0) {
							$('#sbx').html('[Ok]');
	
						} else {
							var tobig = new BigNumber(rstbx);
							$('#sbx').html('[In] ' + (tobig.minus(odbx)).toFixed(4));
						}
					}
				}
				if (odfx !== '' && $.trim(odfx).length > 0 && $.isNumeric(odfx)) {
	
					if (rstfx !== '' && $.trim(rstfx).length > 0 && $.isNumeric(rstfx)) {
	
						if (odfx * 1000 > rstfx * 1000) {
							var tobig = new BigNumber(odfx);
							$('#sfx').html('[Out] ' + (tobig.minus(rstfx)).toFixed(4));
						} else if (odfx * 1000 - rstfx * 1000 == 0) {
							$('#sfx').html('[Ok]');
	
						} else {
							var tobig = new BigNumber(rstfx);
							$('#sfx').html('[In] ' + (tobig.minus(odfx)).toFixed(4));
						}
					}
	
				}
				if (oddx !== '' && $.trim(oddx).length > 0 && $.isNumeric(oddx)) {
					if (rstdx !== '' && $.trim(rstdx).length > 0 && $.isNumeric(rstdx)) {
	
						if (oddx * 1000 > rstdx * 1000) {
							var tobig = new BigNumber(oddx);
							$('#sdx').html('[Out] ' + (tobig.minus(rstdx)).toFixed(4));
						} else if (oddx * 1000 - rstdx * 1000 == 0) {
							$('#sdx').html('[Ok]');
	
						} else {
							var tobig = new BigNumber(rstdx);
							$('#sdx').html('[In] ' + (tobig.minus(oddx)).toFixed(4));
						}
					}
	
				}
				if (odax !== '' && $.trim(odax).length > 0 && $.isNumeric(odax)) {
	
					if (rstax !== '' && $.trim(rstax).length > 0 && $.isNumeric(rstax)) {
	
						if (odax * 1000 > rstax * 1000) {
							var tobig = new BigNumber(odax);
							$('#sax').html('[Out] ' + (tobig.minus(rstax)).toFixed(4));
						} else if (odax * 1000 - rstax * 1000 == 0) {
							$('#sax').html('[Ok]');
	
						} else {
							var tobig = new BigNumber(rstax);
							$('#sax').html('[In] ' + (tobig.minus(odax)).toFixed(4));
						}
					}
				}
				if (odex !== '' && $.trim(odex).length > 0 && $.isNumeric(odex)) {
	
					if (rstex !== '' && $.trim(rstex).length > 0 && $.isNumeric(rstex)) {
	
						if (odex * 1000 > rstex * 1000) {
							var tobig = new BigNumber(odex);
							$('#sex').html('[Out] ' + (tobig.minus(rstex)).toFixed(4));
						} else if (odex * 1000 - rstex * 1000 == 0) {
							$('#sex').html('[Ok]');
	
						} else {
							var tobig = new BigNumber(rstex);
							$('#sex').html('[In] ' + (tobig.minus(odex)).toFixed(4));
						}
					}
				}
				if (odcx !== '' && $.trim(odcx).length > 0 && $.isNumeric(odcx)) {
					if (rstcx !== '' && $.trim(rstcx).length > 0 && $.isNumeric(rstcx)) {
	
						if (odcx * 1000 > rstcx * 1000) {
							var tobig = new BigNumber(odcx);
							$('#scx').html('[Out] ' + (tobig.minus(rstcx)).toFixed(4));
						} else if (odcx * 1000 - rstcx * 1000 == 0) {
							$('#scx').html('[Ok]');
	
						} else {
							var tobig = new BigNumber(rstcx);
							$('#scx').html('[In] ' + (tobig.minus(odcx)).toFixed(4));
						}
					}
				}
	
	
	
	
			})
			calbutton.addEventListener('click', function() {
				
				
					var odby = $('#odby').html();
					var odfy = $('#odfy').html();
					var oddy = $('#oddy').html();
					var oday = $('#oday').html();
					var odey = $('#odey').html();
					var odcy = $('#odcy').html();
				
				
					var rstby = $('#rstby').val();
					var rstfy = $('#rstfy').val();
					var rstdy = $('#rstdy').val();
					var rstay = $('#rstay').val();
					var rstey = $('#rstey').val();
					var rstcy = $('#rstcy').val();
				
					if (odby !== '' && $.trim(odby).length > 0 && $.isNumeric(odby)) {
						var neg = new BigNumber(odby).negated().toString()
						var temp1 = rstby;
						if (temp1 !== '' && $.trim(temp1).length > 0 && $.isNumeric(temp1)) {
							if (neg * 1000 > temp1 * 1000) {
								var tobig = new BigNumber(neg);
								$('#sby').html('[Right] ' + (tobig.minus(temp1)).toFixed(4));
							} else if (neg * 1000 - temp1 * 1000 == 0) {
								$('#sby').html('[Ok]');
				
							} else {
								var tobig = new BigNumber(temp1);
								$('#sby').html('[Left] ' + (tobig.minus(neg)).toFixed(4));
							}
						}
					}
					if (odfy !== '' && $.trim(odfy).length > 0 && $.isNumeric(odfy)) {
						var neg = new BigNumber(odfy).negated().toString()
						var temp1 = rstfy;
						if (temp1 !== '' && $.trim(temp1).length > 0 && $.isNumeric(temp1)) {
							if (neg * 1000 > temp1 * 1000) {
								var tobig = new BigNumber(neg);
								$('#sfy').html('[Right] ' + (tobig.minus(temp1)).toFixed(4));
							} else if (neg * 1000 - temp1 * 1000 == 0) {
								$('#sfy').html('[Ok]');
				
							} else {
								var tobig = new BigNumber(temp1);
								$('#sfy').html('[Left] ' + (tobig.minus(neg)).toFixed(4));
							}
						}
					}
					if (oddy !== '' && $.trim(oddy).length > 0 && $.isNumeric(oddy)) {
						var neg = new BigNumber(oddy).negated().toString()
						var temp1 = rstdy;
						if (temp1 !== '' && $.trim(temp1).length > 0 && $.isNumeric(temp1)) {
							if (neg * 1000 > temp1 * 1000) {
								var tobig = new BigNumber(neg);
								$('#sdy').html('[Right] ' + (tobig.minus(temp1)).toFixed(4));
							} else if (neg * 1000 - temp1 * 1000 == 0) {
								$('#sdy').html('[Ok]');
				
							} else {
								var tobig = new BigNumber(temp1);
								$('#sdy').html('[Left] ' + (tobig.minus(neg)).toFixed(4));
							}
						}
					}
					if (oday !== '' && $.trim(oday).length > 0 && $.isNumeric(oday)) {
						var neg = new BigNumber(oday).negated().toString()
						var temp1 = rstay;
						if (temp1 !== '' && $.trim(temp1).length > 0 && $.isNumeric(temp1)) {
							if (neg * 1000 > temp1 * 1000) {
								var tobig = new BigNumber(neg);
								$('#say').html('[Right] ' + (tobig.minus(temp1)).toFixed(4));
							} else if (neg * 1000 - temp1 * 1000 == 0) {
								$('#say').html('[Ok]');
				
							} else {
								var tobig = new BigNumber(temp1);
								$('#say').html('[Left] ' + (tobig.minus(neg)).toFixed(4));
							}
						}
					}
					if (odey !== '' && $.trim(odey).length > 0 && $.isNumeric(odey)) {
						var neg = new BigNumber(odey).negated().toString()
						var temp1 = rstey;
						if (temp1 !== '' && $.trim(temp1).length > 0 && $.isNumeric(temp1)) {
							if (neg * 1000 > temp1 * 1000) {
								var tobig = new BigNumber(neg);
								$('#sey').html('[Right] ' + (tobig.minus(temp1)).toFixed(4));
							} else if (neg * 1000 - temp1 * 1000 == 0) {
								$('#sey').html('[Ok]');
				
							} else {
								var tobig = new BigNumber(temp1);
								$('#sey').html('[Left] ' + (tobig.minus(neg)).toFixed(4));
							}
						}
					}
					if (odcy !== '' && $.trim(odcy).length > 0 && $.isNumeric(odcy)) {
						var neg = new BigNumber(odcy).negated().toString()
						var temp1 = rstcy;
						if (temp1 !== '' && $.trim(temp1).length > 0 && $.isNumeric(temp1)) {
							if (neg * 1000 > temp1 * 1000) {
								var tobig = new BigNumber(neg);
								$('#scy').html('[Right] ' + (tobig.minus(temp1)).toFixed(4));
							} else if (neg * 1000 - temp1 * 1000 == 0) {
								$('#scy').html('[Ok]');
				
							} else {
								var tobig = new BigNumber(temp1);
								$('#scy').html('[Left] ' + (tobig.minus(neg)).toFixed(4));
							}
						}
					}
				
			})
			calbutton.addEventListener('click', function() {
				
					var odbz = $('#odbz').html();
					var odfz = $('#odfz').html();
					var oddz = $('#oddz').html();
					var odaz = $('#odaz').html();
					var odez = $('#odez').html();
					var odcz = $('#odcz').html();
				
					var rstbz = $('#rstbz').val();
					var rstfz = $('#rstfz').val();
					var rstdz = $('#rstdz').val();
					var rstaz = $('#rstaz').val();
					var rstez = $('#rstez').val();
					var rstcz = $('#rstcz').val();
				
					if (odbz !== '' && $.trim(odbz).length > 0 && $.isNumeric(odbz)) {
						if (rstbz !== '' && $.trim(rstbz).length > 0 && $.isNumeric(rstbz)) {
							if (odbz * 1000 > rstbz * 1000) {
								var tobig = new BigNumber(odbz);
								$('#sbz').html('[Up] ' + (tobig.minus(rstbz)).toFixed(4));
							} else if (odbz * 1000 - rstbz * 1000 == 0) {
								$('#sbz').html('[Ok]');
				
							} else {
								var tobig = new BigNumber(rstbz);
								$('#sbz').html('[Down] ' + (tobig.minus(odbz)).toFixed(4));
							}
						}
					}
				
					if (odfz !== '' && $.trim(odfz).length > 0 && $.isNumeric(odfz)) {
						if (rstfz !== '' && $.trim(rstfz).length > 0 && $.isNumeric(rstfz)) {
							if (odfz * 1000 > rstfz * 1000) {
								var tobig = new BigNumber(odfz);
								$('#sfz').html('[Up] ' + (tobig.minus(rstfz)).toFixed(4));
							} else if (odfz * 1000 - rstfz * 1000 == 0) {
								$('#sfz').html('[Ok]');
				
							} else {
								var tobig = new BigNumber(rstfz);
								$('#sfz').html('[Down] ' + (tobig.minus(odfz)).toFixed(4));
							}
						}
					}
					if (oddz !== '' && $.trim(oddz).length > 0 && $.isNumeric(oddz)) {
						if (rstdz !== '' && $.trim(rstdz).length > 0 && $.isNumeric(rstdz)) {
							if (oddz * 1000 > rstdz * 1000) {
								var tobig = new BigNumber(oddz);
								$('#sdz').html('[Up] ' + (tobig.minus(rstdz)).toFixed(4));
							} else if (oddz * 1000 - rstdz * 1000 == 0) {
								$('#sdz').html('[Ok]');
				
							} else {
								var tobig = new BigNumber(rstdz);
								$('#sdz').html('[Down] ' + (tobig.minus(oddz)).toFixed(4));
							}
						}
					}
				
					if (odaz !== '' && $.trim(odaz).length > 0 && $.isNumeric(odaz)) {
						if (rstaz !== '' && $.trim(rstaz).length > 0 && $.isNumeric(rstaz)) {
							if (odaz * 1000 > rstaz * 1000) {
								var tobig = new BigNumber(odaz);
								$('#saz').html('[Up] ' + (tobig.minus(rstaz)).toFixed(4));
							} else if (odaz * 1000 - rstaz * 1000 == 0) {
								$('#saz').html('[Ok]');
				
							} else {
								var tobig = new BigNumber(rstaz);
								$('#saz').html('[Down] ' + (tobig.minus(odaz)).toFixed(4));
							}
						}
					}
				
					if (odez !== '' && $.trim(odez).length > 0 && $.isNumeric(odez)) {
						if (rstez !== '' && $.trim(rstez).length > 0 && $.isNumeric(rstez)) {
							if (odez * 1000 > rstez * 1000) {
								var tobig = new BigNumber(odez);
								$('#sez').html('[Up] ' + (tobig.minus(rstez)).toFixed(4));
							} else if (odez * 1000 - rstez * 1000 == 0) {
								$('#sez').html('[Ok]');
				
							} else {
								var tobig = new BigNumber(rstez);
								$('#sez').html('[Down] ' + (tobig.minus(odez)).toFixed(4));
							}
						}
					}
					if (odcz !== '' && $.trim(odcz).length > 0 && $.isNumeric(odcz)) {
						if (rstcz !== '' && $.trim(rstcz).length > 0 && $.isNumeric(rstcz)) {
							if (odcz * 1000 > rstcz * 1000) {
								var tobig = new BigNumber(odcz);
								$('#scz').html('[Up] ' + (tobig.minus(rstcz)).toFixed(4));
							} else if (odcz * 1000 - rstcz * 1000 == 0) {
								$('#scz').html('[Ok]');
				
							} else {
								var tobig = new BigNumber(rstcz);
								$('#scz').html('[Down] ' + (tobig.minus(odcz)).toFixed(4));
							}
						}
					}
				
				
				
			})
	
		}
	}
	
	
	</script>
	<script>
		function calculateYposition() {
	
	
			//order
			var bx = $('#odbx').html();
			var by = $('#odby').html();
			var dx = $('#oddx').html();
			var dy = $('#oddy').html();
	
	
	
			var ax = $('#odax').html();
			var ay = $('#oday').html();
			var cx = $('#odcx').html();
			var cy = $('#odcy').html();
	
	
	
	
			//input
	
			var ibx = $('#rstbx').val();
			var iby = $('#rstby').val();
			var idx = $('#rstdx').val();
			var idy = $('#rstdy').val();
	
	
			var iax = $('#rstax').val();
			var iay = $('#rstay').val();
			var icx = $('#rstcx').val();
			var icy = $('#rstcy').val();
	
	
	
	

			var origcenterBDy = (new BigNumber(by).plus(new BigNumber(
				dy))).dividedBy(2);

			var origcenterACy = (new BigNumber(ay).plus(new BigNumber(
				cy))).dividedBy(2);
	

			var OtheoryY = origcenterBDy.plus(origcenterACy)
				.dividedBy(2);
	
	
	

			var inputcenterBDy = (new BigNumber(iby).plus(
				new BigNumber(
					idy))).dividedBy(2);

			var inputcenterACy = (new BigNumber(iay).plus(
				new BigNumber(
					icy))).dividedBy(2);

			var ItheoryY = inputcenterBDy.plus(inputcenterACy)
				.dividedBy(2);

	
	

	
			confirm('  mini prism,   level   40cm  '  );
	
		$('#yy').html(ItheoryY.plus(OtheoryY).toFixed(4));
		}

