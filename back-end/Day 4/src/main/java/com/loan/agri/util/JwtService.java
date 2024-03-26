package com.loan.agri.util;

import java.security.Key;
import java.util.Date;
import java.util.HashMap;
import java.util.Map;
import java.util.function.Function;

import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.stereotype.Service;

import io.jsonwebtoken.Claims;
import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.SignatureAlgorithm;
import io.jsonwebtoken.io.Decoders;
import io.jsonwebtoken.security.Keys;

@Service
public class JwtService {
    private static final String SECRET_KEY = "B374A26A71490437AA024E4FADD5B497FDFF1A8EA6FF12F6FB65AF2720B59CCF";
    private static final String CLAIM_KEY_MOBILE_NUMBER = "mobileNumber";
    private static final String CLAIM_KEY_ROLE = "role";

    public String extractUsername(String token) {
        return extractClaim(token, Claims::getSubject);
    }

    public <T> T extractClaim(String token, Function<Claims, T> claimsResolver) {
        final Claims claims = extractAllClaims(token);
        return claimsResolver.apply(claims);
    }
    
    public String extractMobileNumber(String token) {
        Claims claims = extractAllClaims(token);
        return (String) claims.get(CLAIM_KEY_MOBILE_NUMBER);
    }

    public String extractRole(String token) {
        Claims claims = extractAllClaims(token);
        return (String) claims.get(CLAIM_KEY_ROLE);
    }


    public String generateToken(UserDetails userDetails) {
        Map<String, Object> claims = new HashMap<>();
        claims.put(CLAIM_KEY_MOBILE_NUMBER, userDetails.getUsername()); // Store the mobile number in claims
        claims.put(CLAIM_KEY_ROLE, userDetails.getAuthorities().iterator().next().getAuthority()); // Store the user's role in claims
        return generateToken(claims);
    }

    public String generateToken(Map<String, Object> claims) {
        return Jwts.builder().setClaims(claims)
                .setIssuedAt(new Date(System.currentTimeMillis()))
                .setExpiration(new Date(System.currentTimeMillis() + 1000 * 60 * 60))
                .signWith(getSignInKey(), SignatureAlgorithm.HS256).compact();
    }

    public boolean isTokenValid(String token, UserDetails userDetails) {
        final String mobileNumber = extractUsername(token);
        return (mobileNumber.equals(userDetails.getUsername()) && !isTokenExpired(token));
    }

    private boolean isTokenExpired(String token) {
        return extractExpiration(token).before(new Date());
    }

    private Date extractExpiration(String token) {
        return extractClaim(token, Claims::getExpiration);
    }

    private Claims extractAllClaims(String token) {
        return Jwts.parserBuilder().setSigningKey(getSignInKey()).build().parseClaimsJws(token).getBody();
    }

    private Key getSignInKey() {
        byte[] keyBytes = Decoders.BASE64.decode(SECRET_KEY);
        return Keys.hmacShaKeyFor(keyBytes);
    }
}
